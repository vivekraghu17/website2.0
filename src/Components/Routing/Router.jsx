import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Employer from "../Employer";
import Bootcamp from "../Bootcamp";
import Candidate from "../Candidate";
import Header from "../Header";
import Footer from "../Footer";
import EmployerSignIn from "../Login/EmployerSignIn";
import BootcampSignIn from "../Login/BootcampSignIn";

import StudentSignIn from "../Login/StudentSignIn";
import StudentSignUp from "../Signup/StudentSignUp";
import BootcampSignUp from "../Signup/BootcampSignUp";
import EmployerSignUp from "../Signup/EmployerSignUp";
import NotFound from "../NotFound";
import ContactUs from "../ContactUs";
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/employersignin" element={<EmployerSignIn />} />
        <Route path="/bootcampsignin" element={<BootcampSignIn />} />
        <Route path="/studentsignin" element={<StudentSignIn />} />
        <Route path="/studentsignup" element={<StudentSignUp />} />
        <Route path="/bootcampsignup" element={<BootcampSignUp />} />
        <Route path="/employersignup" element={<EmployerSignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
