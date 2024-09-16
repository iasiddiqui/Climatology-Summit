import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Home/Footer/Footer.jsx";
const Register = () => {
  return (
    <div>
      <Navbar/>
      <div className="Register main">
        <h1>Conference Registration</h1>
        <p>Welcome to the conference registration payment page! We’re excited to have you join us at our upcoming event. Below, you’ll find all the necessary details to complete your registration and secure your spot.
</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
