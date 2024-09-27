import React from "react";
import "./CancellationPolicy.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Home/Footer/Footer";
import { Link } from "react-router-dom";
const CancellationPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="cacellation-container">
        <div className="cacellation-up">
          <h1 className="cacellation-h1">Cancellation Policy for Stripe Conferences</h1>
          <h1 className="cacellation-h1-link">
            <Link className="cacellation-link" to="/">www.climatologysummit.com</Link>
          </h1>
        </div>
        <div className="cacellation-content">
            <p className="cacellation-p">If Stripe Conferences cancels this event for any reason, you will receive a credit for 100% of the registration fee paid. You may use this credit for another Stripe Conferences event which must occur within one year from the date of cancellation.</p>
            <h2 className="cacellation-h2">Postponement</h2>
            <p>If Stripe Conferences postpones an event for any reason and you are unable or unwilling to attend on rescheduled dates, you will receive a credit for 100% of the registration fee paid. You may use this credit for another Stripe Conferences event which must occur within one year from the date of postponement.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
