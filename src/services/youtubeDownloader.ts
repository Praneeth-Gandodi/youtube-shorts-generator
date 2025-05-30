import ytdl from 'ytdl-core';
import { promises as fs } from 'fs';
import path from 'path';

class YouTubeDownloader {
    async downloadVideo(url: string, outputDir: string): Promise<string> {
        const videoId = this.extractVideoId(url);
        const videoInfo = await ytdl.getInfo(videoId);
        const title = videoInfo.videoDetails.title.replace(/[<>:"/\\|?*]+/g, ''); // Sanitize title for filename
        const outputPath = path.join(outputDir, `${title}.mp4`);

        return new Promise((resolve, reject) => {
            const videoStream = ytdl(url, { quality: 'highestvideo' });
            const fileStream = fs.createWriteStream(outputPath);

            videoStream.pipe(fileStream);

            fileStream.on('finish', () => {
                resolve(outputPath);
            });

            fileStream.on('error', (error) => {
                reject(error);
            });
        });
    }

    private extractVideoId(url: string): string {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : '';
    }
}

export default new YouTubeDownloader();