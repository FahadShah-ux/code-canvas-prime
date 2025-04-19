
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
    // Calculate typing speed based on phrase length and desired animation duration (2 seconds)
    const currentPhrase = phrases[currentPhraseIndex];
    const typingDuration = 5000; // 2 seconds for typing
    const deletingDuration = 5000; // 2 seconds for deleting
    const displayDuration = 50000; // 5 seconds to display the full text
    
    // Calculate speeds based on phrase length to achieve desired durations
    const typeSpeed = typingDuration / currentPhrase.length;
    const deleteSpeed = deletingDuration / currentPhrase.length;

    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        // Deleting state
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));

        // If all deleted, move to next phrase
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          return 500; // Short pause before typing next phrase
        }
        return deleteSpeed; // Speed for deleting
      } else {
        // Typing state
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));

        // If fully typed, switch to deleting after the display duration
        if (currentText.length === currentPhrase.length) {
          setIsDeleting(true);
          return displayDuration; // Wait for 5 seconds before starting to delete
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
