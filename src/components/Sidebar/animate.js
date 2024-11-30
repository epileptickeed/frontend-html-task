export const textMotion = {
  rest: {
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
};

export const slashMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
};
