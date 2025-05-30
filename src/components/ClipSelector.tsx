import React, { useState } from 'react';

const ClipSelector: React.FC<{ onSelectClip: (start: number, end: number) => void }> = ({ onSelectClip }) => {
    const [startTime, setStartTime] = useState<number>(0);
    const [endTime, setEndTime] = useState<number>(60);

    const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartTime(Number(event.target.value));
    };

    const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndTime(Number(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (endTime > startTime) {
            onSelectClip(startTime, endTime);
        } else {
            alert("End time must be greater than start time.");
        }
    };

    return (
        <div>
            <h2>Select Clip Duration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Start Time (seconds):
                        <input type="number" value={startTime} onChange={handleStartTimeChange} />
                    </label>
                </div>
                <div>
                    <label>
                        End Time (seconds):
                        <input type="number" value={endTime} onChange={handleEndTimeChange} />
                    </label>
                </div>
                <button type="submit">Select Clip</button>
            </form>
        </div>
    );
};

export default ClipSelector;