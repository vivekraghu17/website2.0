import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Employer from "../Employer";
import Bootcamp from "../Bootcamp";
import Candidate from "../Candidate";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
  );
}
