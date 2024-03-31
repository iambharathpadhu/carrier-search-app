import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarrierSearchWizard } from "./Components/CarrierSearchWizard";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarrierSearchWizard />} />
      </Routes>
    </Router>
  );
}
