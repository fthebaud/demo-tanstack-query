import { DELAY_MS } from "./clientConfig";

export function fetchText(): Promise<string> {
  const err = new Error("stacktrace");
  const stack = err.stack?.match(/src.+?\n/g)?.[1] || "react query";
  console.log("fetchText   - from:", stack);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("some string");
    }, DELAY_MS);
  });
}
