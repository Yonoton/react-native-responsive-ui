import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  const onChange = ({
    window: { width, height, scale, fontScale },
  }: {
    window: ScaledSize;
  }) => setDimensions({ width, height, scale, fontScale });

  useEffect(() => {
    const eventSubscription = Dimensions.addEventListener("change", onChange);
    return () => eventSubscription.remove();
  }, []);

  return dimensions;
};

export default useDimensions;
