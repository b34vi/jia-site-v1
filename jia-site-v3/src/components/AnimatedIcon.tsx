import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  trigger?: 'hover' | 'view';
  animation?: 'pulse' | 'float' | 'draw' | 'bounce';
}

export function AnimatedIcon({ 
  icon: Icon, 
  className, 
  size = 24, 
  trigger = 'view',
  animation = 'float'
}: AnimatedIconProps) {
  
  const variants = {
    float: {
      y: [0, -4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeOut"
      }
    },
    draw: {
      pathLength: [0, 1],
      pathOffset: [1, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={cn("inline-flex items-center justify-center", className)}
      initial={trigger === 'view' ? "hidden" : false}
      whileInView={trigger === 'view' ? "visible" : false}
      whileHover={trigger === 'hover' ? animation : false}
      animate={trigger === 'view' ? animation : false}
      variants={variants}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}
