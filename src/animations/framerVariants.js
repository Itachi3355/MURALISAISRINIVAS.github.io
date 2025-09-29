export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideIn = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
};

export const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const hoverEffect = {
  hover: { scale: 1.05 },
};

export const exitAnimation = {
  exit: { opacity: 0, transition: { duration: 0.2 } },
};