import { useEffect, useState } from "react";
import { fetchDate } from "./client/dateClient";
import { fetchRandom } from "./client/randomClient";
import { fetchText } from "./client/textClient";

export default function DemoReact() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [random, setRandom] = useState("");

  useEffect(() => {
    fetchText().then((t: string) => setText(t));
  }, []);

  useEffect(() => {
    fetchDate().then((d: string) => setDate(d));
  }, []);

  useEffect(() => {
    fetchRandom().then((r: string) => setRandom(r));
  }, []);

  return (
    <div>
      <h3>Use State</h3>
      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Text:</span>
        {text}
      </div>
      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Seconds:</span>
        {date}
      </div>
      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Random:</span>
        {random}
      </div>
    </div>
  );
}
