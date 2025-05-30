import { format } from 'date-fns';

export const formatTimestamp = (seconds: number): string => {
    const date = new Date(seconds * 1000);
    return format(date, 'mm:ss');
};

export const generateRandomName = (): string => {
    const adjectives = ['Amazing', 'Incredible', 'Fantastic', 'Epic', 'Unbelievable'];
    const nouns = ['Clip', 'Moment', 'Highlight', 'Scene', 'Short'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun} ${Date.now()}`;
};