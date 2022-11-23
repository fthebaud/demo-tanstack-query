import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DemoReact from "./DemoReact";
import "./css/app.css";
import DemoTanstackQuery from "./DemoTanstackQuery";
import DemoTanstackQuerySuspense from "./DemoTanstackQuerySuspense";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <DemoReact />
        <DemoReact />
        <DemoReact />
        <DemoTanstackQuery />
        <DemoTanstackQuery />
        <DemoTanstackQuery />
        <Suspense fallback={<div>SUSPENSE</div>}>
          <DemoTanstackQuerySuspense />
          <DemoTanstackQuerySuspense />
          <DemoTanstackQuerySuspense />
        </Suspense>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
