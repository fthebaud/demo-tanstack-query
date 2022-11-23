import { DELAY_MS } from "./clientConfig";

export function fetchRandom(): Promise<string> {
  const err = new Error("stacktrace");
  const stack = err.stack?.match(/src.+?\n/g)?.[1] || "react query";
  console.log("fetchRandom - from:", stack);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 1000).toString());
    }, DELAY_MS);
  });
}
