// variants.js
export const pageVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: "0%",
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export const footerVariants = {
  enter: {
    y: "0%",
    opacity: 1,
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};
