import React, { useRef, useState } from 'react';

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">Now Playing: Demo Track</h2>
      <audio ref={audioRef} src="/audio/demo-track.mp3" onEnded={() => setIsPlaying(false)} />
      <button onClick={togglePlay} className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
