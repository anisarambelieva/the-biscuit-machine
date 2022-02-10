const useBiscuit = (onAnimationEnd, onStamp) => {
  let animationsCount = 0;

  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 2 === 0) {
      onAnimationEnd(true);
      onStamp(false);
    }
  };

  return { handleAnimationEnd };
};

export default useBiscuit;
