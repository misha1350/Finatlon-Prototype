import { resolve } from "styled-jsx/css";
import { cards } from "./cards";

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = cards.slice(from, to);
      resolve({
        count: cards.length,
        data: data,
      });
    });
  },
};
export default service;
