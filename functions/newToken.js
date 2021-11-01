import fs from "fs";
import { generateFish } from "./utils/generate.js";

export const newToken = async (n) => {
  for (let i = 1; i < n + 1; i++) {
    const { svg } = generateFish();
    fs.writeFile(`./out/${i}.svg`, svg, (err) => {
      if (err) throw err;
    });
  }
};
