import React from "react";

const getWidth = () => {
  const notify: Function[] = [];
  const setWidth = (size: number | undefined) => {
    notify.forEach((f) => f(size));
  };

  return {
    useWidth: () => {
      let [innerWidth, setInnerWidth] = React.useState<number | undefined>();
      return {
        setWidth,
        get width() {
          notify.push(setInnerWidth);
          return innerWidth;
        }
      };
    }
  };
};

export const { useWidth } = getWidth();
