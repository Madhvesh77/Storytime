import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SphericalRevolvingImages() {
  const images = [
    '/../../../public/sunset.webp',
    '/../../../public/Opening.png',
    '/../../../public/War.jpeg',
  ];

  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', perspective: '1000px' }}>
      {images.map((src, index) => (
        <motion.div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: '50% 50%',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${index * 120}deg) translateZ(150px)`, // Initial positioning in 3D space
          }}
          animate={{
            rotateY: 360, // This will rotate the entire div around the Y-axis
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 1, // Stagger the start time for each image
          }}
        >
          <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
        </motion.div>
      ))}
    </div>
  );
}
