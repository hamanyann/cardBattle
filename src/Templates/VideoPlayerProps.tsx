import React from 'react';

interface VideoPlayerProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = '400', height = '400' }) => {
  return (
    <div>
      <video width={width} height={height}   autoPlay muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
