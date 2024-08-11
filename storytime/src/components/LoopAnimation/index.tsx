import { motion } from 'framer-motion';

export default function LoopAnimation() {
  return (
    <motion.div
      animate={{
        x: [0, 100, 0], // Moves from 0 to 100 and back to 0
      }}
      transition={{
        duration: 2,
        repeat: Infinity, // Loops the animation infinitely
        repeatType: 'loop', // Default is 'loop', you can use 'mirror' or 'reverse'
      }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
      }}
    >
        <h1>Hi</h1>
    </motion.div>
  );
}
