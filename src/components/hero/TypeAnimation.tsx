
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeAnimationProps {
  phrases: string[];
  className?: string;
}

export const TypeAnimation = ({
  phrases,
  className = ''
}: TypeAnimationProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 150; // Typing speed
    const deleteSpeed = 100; // Deleting speed
    const waitAtEnd = 2000; // Wait at the end of typing
    const waitAtStart = 1000; // Wait before deleting

    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting state
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));

        // If all deleted, move to next phrase
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          return waitAtStart; // Wait before typing next phrase
        }
        return deleteSpeed; // Speed for deleting
      } else {
        // Typing state
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));

        // If fully typed, switch to deleting after a pause
        if (currentText.length === currentPhrase.length) {
          setIsDeleting(true);
          return waitAtEnd; // Wait at the end of typing
        }
        return typeSpeed; // Speed for typing
      }
    };

    const timeout = setTimeout(handleTyping, handleTyping());
    return () => clearTimeout(timeout);
  }, [currentPhraseIndex, currentText, isDeleting, phrases]);

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-blue-500">{currentText}</span>
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1 inline-block w-[3px] h-[1em] bg-primary" 
      />
    </motion.div>
  );
};
