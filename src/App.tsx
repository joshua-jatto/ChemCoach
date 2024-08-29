import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./authentication/SignUp-form";
import Navbar from "./components/navbar";
import Home from "./pages";
import "./index.css";
import { pages } from "./pages/pages";
const {AboutUs, BecomeMentor,FindMentor, Support} = pages

function App() {
  return (
    <BrowserRouter basename="/" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/Become-mentor" element={<BecomeMentor/>}/>
        <Route path="/find-mentor" element={<FindMentor/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
