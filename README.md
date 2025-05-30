# YouTube Shorts Generator

## Overview
The YouTube Shorts Generator is a web application that allows users to create engaging YouTube Shorts from existing YouTube videos. Users can input a YouTube URL, select specific clips, generate subtitles, and save the final output in a vertical video format.

## Features
- **Video Uploading**: Users can upload YouTube URLs for processing.
- **Clip Selection**: An intuitive interface for selecting the desired clip from the video.
- **Subtitle Generation**: Automatically generates attractive subtitles for the selected clips.
- **AI Naming**: Generates catchy names for the output clips using AI.
- **Video Processing**: Resizes videos to the required aspect ratio and resolution for YouTube Shorts.
- **Output Management**: Saves the processed video clips in a designated output folder.

## Project Structure
```
youtube-shorts-generator
├── src
│   ├── api
│   │   └── index.ts
│   ├── components
│   │   ├── ClipSelector.tsx
│   │   ├── SubtitleGenerator.tsx
│   │   └── VideoUploader.tsx
│   ├── services
│   │   ├── youtubeDownloader.ts
│   │   ├── clipDetection.ts
│   │   ├── subtitleService.ts
│   │   ├── aiNamingService.ts
│   │   └── videoProcessing.ts
│   ├── utils
│   │   └── index.ts
│   ├── output
│   └── App.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd youtube-shorts-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000`.
3. Enter a valid YouTube URL in the provided input field.
4. Select the desired clip duration and generate subtitles.
5. Click on the process button to create your YouTube Short.

## Requirements
- Node.js
- npm
- A modern web browser

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.