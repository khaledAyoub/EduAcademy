import React, { useState, useEffect } from 'react';

const messages = [
  "Access premium courses and unlock your potential",
  "Learn from industry experts at your own pace",
  "Master new skills with hands-on projects",
  "Join a community of passionate learners",
  "Transform your career with expert guidance"
];

export function TypewriterText() {
  const [displayText, setDisplayText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const typeSpeed = 30;
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      } else {
        setDisplayText(currentMessage.substring(0, 
          isDeleting ? displayText.length - 1 : displayText.length + 1
        ));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, messageIndex, isDeleting]);

  return (
    <p className="text-xl md:text-2xl mb-8 h-8 dark:text-gray-200">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
}