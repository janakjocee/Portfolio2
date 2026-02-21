import { motion } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingAnimationProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  words,
  className = "",
  cursorClassName = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const { text } = useTypingAnimation({
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  });

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="gradient-text font-semibold">{text}</span>
      <motion.span
        className={`inline-block w-[3px] h-[1em] ml-1 bg-primary ${cursorClassName}`}
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </span>
  );
}

export default TypingAnimation;
