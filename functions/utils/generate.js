import { p } from "../../assets/patternExport.js";
import { getShades } from "./shades.js";

export const generateFish = () => {
  const getColor = () => {
    const hex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (hex.length < 7) {
      return getColor();
    }
    return hex;
  };

  const { primary, secondary } = getShades([getColor(), getColor()]);
  const keys = Object.keys(p);
  const pattern = keys[Math.floor(Math.random() * keys.length)];
  return {
    svg: p[pattern]({ primary, secondary }),
    pattern,
    colors: { primary, secondary },
  };
};
