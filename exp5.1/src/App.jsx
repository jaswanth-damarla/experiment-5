import { Suspense, lazy } from "react";
const Dash = lazy(() => import("./Components/Dashboard"));
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Dash />
    </Suspense>
  );
}

export default App;