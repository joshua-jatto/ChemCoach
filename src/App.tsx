import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./authentication/SignUp-form";
import LoginForm from "./authentication/Login-form";
import Navbar from "./components/navbar";
import Home from "./pages";
import "./index.css";
import { pages } from "./pages/pages-exports";
import NavFooter from "./components/footer";
const {AboutUs, BecomeMentor,FindMentor, Support } = pages

function App() {
  return (
    <BrowserRouter basename="/" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Become-mentor" element={<BecomeMentor/>}/>
        <Route path="/find-mentor" element={<FindMentor/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <NavFooter/>
    </BrowserRouter>
  );
}

export default App;
