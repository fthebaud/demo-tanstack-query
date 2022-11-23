import { useEffect, useState } from "react";
import { fetchText } from "./client/textClient";
import { fetchDate } from "./client/dateClient";
import { fetchRandom } from "./client/randomClient";
import { useQuery } from "@tanstack/react-query";

export default function DemoTanstackQuery() {
  const { data: text, isLoading: textLoading } = useQuery({
    queryKey: ["text-regular"],
    queryFn: fetchText,
  });
  const { data: date, isLoading: dateLoading } = useQuery({
    queryKey: ["date-regular"],
    queryFn: fetchDate,
  });
  const { data: random, isLoading: randomLoading } = useQuery({
    queryKey: ["random-regular"],
    queryFn: fetchRandom,
  });

  return (
    <div>
      <h3>Tanstack Query</h3>
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
