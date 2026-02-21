import { useState, useEffect, useCallback } from "react";

interface UseTypingAnimationOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypingAnimationOptions) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[currentIndex];

    if (isPaused) {
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return;
    }

    if (isDeleting) {
      setCurrentText((prev) => prev.slice(0, -1));

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setCurrentText(currentWord.slice(0, currentText.length + 1));

      if (currentText === currentWord) {
        setIsPaused(true);
      }
    }
  }, [currentText, currentIndex, isDeleting, isPaused, words, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : isPaused ? pauseDuration : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [type, isDeleting, isPaused, deletingSpeed, typingSpeed, pauseDuration]);

  return { text: currentText };
}

export default useTypingAnimation;
