import { fetchText } from "./client/textClient";
import { fetchDate } from "./client/dateClient";
import { fetchRandom } from "./client/randomClient";
import { useQuery } from "@tanstack/react-query";

export default function DemoTanstackQuery() {
  const { data: text, isLoading: textLoading } = useQuery({
    queryKey: ["suspense-text"],
    queryFn: fetchText,
    suspense: true,
  });
  const { data: date, isLoading: dateLoading } = useQuery({
    queryKey: ["suspense-date"],
    queryFn: fetchDate,
  });
  const { data: random, isLoading: randomLoading } = useQuery({
    queryKey: ["suspense-random"],
    queryFn: fetchRandom,
  });

  return (
    <div>
      <h3>Tanstack Query with Suspense</h3>
      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Text:</span>
        {textLoading ? "LOADING..." : text}
      </div>

      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Seconds:</span>
        {dateLoading ? "LOADING..." : date}
      </div>
      <div>
        <span style={{ display: "inline-block", width: "80px" }}>Random:</span>
        {randomLoading ? "LOADING..." : random}
      </div>
    </div>
  );
}
