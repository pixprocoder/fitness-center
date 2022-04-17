import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Shared/Header/Header";
import Footer from "../src/pages/Shared/Footer/Footer";
import Home from "../src/pages/Home/Home/Home";
import Services from "./pages/Home/Services/Services";
import Blogs from "../src/pages/Blogs/Blogs";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
import Login from "../src/pages/Register/Login/Login";
import Register from "../src/pages/Register/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
