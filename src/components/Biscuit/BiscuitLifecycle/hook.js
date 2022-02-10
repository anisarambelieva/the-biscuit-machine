import { useEffect, useState } from "react";

const useBiscuitLifecycle = (setBakedBiscuitsCount, bakedBiscuitsCount) => {
  const [stamped, setStamped] = useState(false);
  const [baked, setBaked] = useState(false);

  useEffect(() => {
    if (baked) {
      setBakedBiscuitsCount((bakedBiscuitsCount) => bakedBiscuitsCount + 1);
    }
  }, [baked, setBakedBiscuitsCount]);

  return {
    stamped,
    setStamped,
    baked,
    setBaked,
  };
};

export default useBiscuitLifecycle;
