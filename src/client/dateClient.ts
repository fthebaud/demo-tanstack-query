import { DELAY_MS } from "./clientConfig";

export function fetchDate(): Promise<string> {
  const err = new Error("stacktrace");
  const stack = err.stack?.match(/src.+?\n/g)?.[1] || "react query";
  console.log("fetchDate   - from:", stack);

  return new Promise((resolve) => {
    setTimeout(() => {
      const date = new Date();
      resolve(`${date.getSeconds()}.${date.getMilliseconds()}`);
    }, DELAY_MS);
  });
}
