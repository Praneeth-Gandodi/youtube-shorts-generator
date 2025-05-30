import React, { useEffect, useState } from 'react';
import { generateSubtitles } from '../services/subtitleService';

const SubtitleGenerator = ({ videoClip }) => {
    const [subtitles, setSubtitles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (videoClip) {
            setLoading(true);
            generateSubtitles(videoClip)
                .then((generatedSubtitles) => {
                    setSubtitles(generatedSubtitles);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error generating subtitles:', error);
                    setLoading(false);
                });
        }
    }, [videoClip]);

    return (
        <div className="subtitle-generator">
            {loading ? (
                <p>Loading subtitles...</p>
            ) : (
                <div>
                    <h3>Generated Subtitles</h3>
                    <ul>
                        {subtitles.map((subtitle, index) => (
                            <li key={index}>{subtitle.text} ({subtitle.start} - {subtitle.end})</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SubtitleGenerator;