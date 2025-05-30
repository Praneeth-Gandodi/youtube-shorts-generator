import React, { useState } from 'react';

const VideoUploader: React.FC = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const validateUrl = (inputUrl: string) => {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        return youtubeRegex.test(inputUrl);
    };

    const handleUpload = () => {
        if (validateUrl(url)) {
            setError('');
            // Call the API to process the video
            // Example: api.processVideo(url);
        } else {
            setError('Please enter a valid YouTube URL.');
        }
    };

    return (
        <div>
            <h2>Upload YouTube Video URL</h2>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter YouTube URL"
            />
            <button onClick={handleUpload}>Upload</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default VideoUploader;