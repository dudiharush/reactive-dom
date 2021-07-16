import React from "react";

const getWidth = () => {
  const notifyMap: Map<number, Function> = new Map();
  const setWidth = (size: number | undefined) => {
    notifyMap.forEach((f) => f(size));
  };

  return {
    useWidth: () => {
      const key = React.useRef(Math.random());

      let [innerWidth, setInnerWidth] = React.useState<number | undefined>();
      return {
        setWidth,
        get width() {
          notifyMap.set(key.current, setInnerWidth);
          return innerWidth;
        }
      };
    }
  };
};

export const { useWidth } = getWidth();
