import React, { forwardRef, useEffect, useRef } from 'react';

interface Props {
  stream?: MediaStream;
  muted?: boolean;
  autoPlay?: boolean;
  style?: React.CSSProperties;
  username?: string;
}

const Video = forwardRef<HTMLVideoElement, Props>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Combine the forwarded ref with our local ref
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(videoRef.current);
    } else if (ref) {
      ref.current = videoRef.current;
    }
  }, [ref]);

  // Handle stream changes with error handling and logging
  useEffect(() => {
    if (videoRef.current && props.stream) {
      videoRef.current.srcObject = props.stream;
      
      // Add error handling
      videoRef.current.onerror = (e) => {
        console.error('Video element error:', e);
      };

      // Add loadedmetadata handler to ensure video is ready
      videoRef.current.onloadedmetadata = () => {
        console.log('Video metadata loaded, ready to play');
        videoRef.current?.play().catch(e => {
          console.error('Error playing video:', e);
        });
      };
    }
  }, [props.stream]);

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        style={props.style}
        muted={props.muted}
        autoPlay={props.autoPlay}
        playsInline
      />
      {props.username && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '4px',
        }}>
          {props.username}
        </div>
      )}
    </div>
  );
});

// Add display name for debugging
Video.displayName = 'Video';

export default Video;
