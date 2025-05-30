import { generate } from 'some-ai-naming-library'; // Replace with actual AI naming library

export const aiNamingService = {
    generateName: async (videoTitle: string): Promise<string> => {
        // Generate a catchy name based on the video title
        const catchyName = await generate({
            prompt: `Create a catchy name for a YouTube short based on the title: "${videoTitle}"`,
            maxTokens: 10,
            temperature: 0.7,
        });
        return catchyName;
    }
};