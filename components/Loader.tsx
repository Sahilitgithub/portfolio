'use client';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="relative flex justify-center items-center flex-col" >
        {/* Rotating spinner */}
        <div className="animate-ping rounded-full border-4 border-t-yellow-500 border-sky-500 w-12 h-12" />

        {/* Static percentage text */}
        <p className='text-white font-bold text-xs mt-2 absolute'>
          {progress.toFixed(1)}%
        </p>

      </div>
    </Html>
  );
};

export default CanvasLoader;
