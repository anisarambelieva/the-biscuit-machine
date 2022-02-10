const useBakedBiscuit = (onBaked) => {
  let animationsCount = 0;

  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 3 === 0) {
      onBaked(false);
    }
  };

  return handleAnimationEnd;
};

export default useBakedBiscuit;
