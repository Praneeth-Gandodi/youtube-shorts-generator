import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { generateSubtitles } from './subtitleService';
import { generateAIName } from './aiNamingService';

const ffmpeg = createFFmpeg({ log: true });

export const processVideo = async (videoFile: File, startTime: number, endTime: number) => {
    if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
    }

    const inputFileName = 'input.mp4';
    const outputFileName = `${generateAIName()}.mp4`;
    const outputPath = `output/${outputFileName}`;

    ffmpeg.FS('writeFile', inputFileName, await fetchFile(videoFile));

    const duration = endTime - startTime;
    if (duration > 60) {
        throw new Error('Clip duration exceeds 60 seconds');
    }

    await ffmpeg.run('-i', inputFileName, '-ss', startTime.toString(), '-t', duration.toString(), '-vf', 'scale=1080:1920', outputFileName);

    const subtitles = await generateSubtitles(videoFile, startTime, endTime);
    if (subtitles) {
        ffmpeg.FS('writeFile', 'subtitles.srt', subtitles);
        await ffmpeg.run('-i', outputFileName, '-vf', 'subtitles=subtitles.srt', outputFileName);
    }

    const data = ffmpeg.FS('readFile', outputFileName);
    const videoBlob = new Blob([data.buffer], { type: 'video/mp4' });

    const url = URL.createObjectURL(videoBlob);
    return { url, outputPath };
};