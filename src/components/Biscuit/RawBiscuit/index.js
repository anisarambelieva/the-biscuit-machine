import "./style.css";

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

const Biscuit = ({ onAnimationEnd, state, onStamp }) => {
  const { handleAnimationEnd } = useBiscuit(onAnimationEnd, onStamp);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className="biscuit"
      style={{
        WebkitAnimationPlayState: state,
      }}
    >
      Biscuit
    </div>
  );
};

export default Biscuit;
