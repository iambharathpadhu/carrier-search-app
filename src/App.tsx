import { useEffect } from "react";
import { AppRouter } from "./AppRouter";

function App() {
  useEffect(() => {
    // Lazy load CSS when the component mounts
    import("./App.css");
  }, []); // Empty dependency array to run the effect only once on mount

  return <AppRouter />;
}

export default App;
