import { useEffect, useState } from 'react';

export default function MiddlePictureParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const boxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`, // Adjust this value for a stronger or lighter effect
  };

  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      {/* Background image that scrolls normally */}
      <div
        style={{
          backgroundImage: 'url("/path/to/your/image.jpg")',
          height: '100vh',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Parallax box in the middle */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
        //   transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          overflow: 'hidden',
          border: '5px solid black',
          borderRadius: '50%',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          ...boxStyle,
        }}
      >
        {/* Inner image or content inside the "hole" */}
        <div
          style={{
            backgroundImage: 'url("/path/to/your/image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Content that scrolls over the background image */}
      <div style={{ marginTop: '100vh', textAlign: 'center' }}>
        <h1>Scroll down to see the effect</h1>
        <p>More content...</p>
        <p>Keep scrolling...</p>
        <p>You're almost there...</p>
        <p>Here is some more content...</p>
      </div>
    </div>
  );
}
