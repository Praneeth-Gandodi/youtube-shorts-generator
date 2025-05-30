import express from 'express';
import { downloadVideo } from '../services/youtubeDownloader';
import { detectClips } from '../services/clipDetection';
import { generateSubtitles } from '../services/subtitleService';
import { generateAIName } from '../services/aiNamingService';
import { processVideo } from '../services/videoProcessing';

const router = express.Router();

// Endpoint to upload YouTube URL and process video
router.post('/process', async (req, res) => {
    const { url } = req.body;

    try {
        // Step 1: Download the video
        const videoPath = await downloadVideo(url);

        // Step 2: Detect suitable clips
        const clips = await detectClips(videoPath);

        // Step 3: Process each clip
        const processedClips = await Promise.all(clips.map(async (clip) => {
            const subtitles = await generateSubtitles(clip);
            const aiName = generateAIName(clip);
            const processedClipPath = await processVideo(clip, subtitles, aiName);
            return { aiName, processedClipPath };
        }));

        // Step 4: Send back the processed clips
        res.json({ success: true, clips: processedClips });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while processing the video.' });
    }
});

export default router;