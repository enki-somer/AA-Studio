import { Variants } from 'framer-motion';

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const fastTransition = {
  duration: 0.15,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const normalTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const slowTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: fastTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: fastTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fastTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fastTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
};

export const hoverLift = {
  scale: 1.02,
  y: -2,
  transition: fastTransition,
};

export const tapScale = {
  scale: 0.98,
  transition: fastTransition,
};

export const getAnimationVariants = (variant: keyof typeof animationVariants): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  return animationVariants[variant];
};

const animationVariants = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
};
