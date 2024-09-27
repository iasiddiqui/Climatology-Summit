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
          <h1 className="cacellation-h1">
            Cancellation Policy for Stripe Conferences
          </h1>
          <h1 className="cacellation-h1-link">
            <Link className="cacellation-link" to="/">
              www.climatologysummit.com
            </Link>
          </h1>
        </div>
        <div className="cacellation-content">
          <p className="cacellation-p">
            If Stripe Conferences cancels this event for any reason, you will
            receive a credit for 100% of the registration fee paid. You may use
            this credit for another Stripe Conferences event which must occur
            within one year from the date of cancellation.
          </p>
          <h2 className="cacellation-h2">Postponement</h2>
          <p className="cacellation-p">
            If Stripe Conferences postpones an event for any reason and you are
            unable or unwilling to attend on rescheduled dates, you will receive
            a credit for 100% of the registration fee paid. You may use this
            credit for another Stripe Conferences event which must occur within
            one year from the date of postponement.
          </p>
          <h2 className="cacellation-h2">lassName="cacellation-p"</h2>
          <p className="cacellation-p">
            All fully paid registrations are transferable to other persons from
            the same organization, if registered person is unable to attend the
            event. Transfers must be made by the registered person in writing to
            support@stripeconferences.com. Details must be included the full
            name of replacement person, their title, contact phone number and
            email address. All other registration details will be assigned to
            the new person unless otherwise specified. <br /> <br />
            Registration can be transferred to one conference to another
            conference of Stripe Conferences if the person is unable to attend
            one of conferences.
            <br />
            <br />
            However, Registration cannot be transferred if it is intimated
            within 14 days of respective conference.
            <br />
            <br />
            The transferred registrations will not be eligible for Refund.
          </p>
          <h2 className="cacellation-h2">Visa Information</h2>
          <p className="cacellation-p">
            Keeping in view of increased security measures, we would like to
            request all the participants to apply for Visa as soon as possible.
            <br />
            <br />
            Stripe Conferences will not directly contact embassies and
            consulates on behalf of visa applicants. All delegates or invitees
            should apply for Business Visa only.
            <br />
            <br />
            Important note for failed visa applications: Visa issues cannot come
            under the consideration of cancellation policy of Stripe
            Conferences, including the inability to obtain a visa.
          </p>
          <h2 className="cacellation-h2">Venue Policy</h2>
          <p className="cacellation-p">
            Due to fluctuating participant numbers, the hotel address provided
            may undergo changes. This adaptability ensures attendees receive
            updated information, maintaining smooth logistics and convenience.
          </p>
          <br />
          <br />
          Flexibility in addressing such fluctuations underscores the
          organizers’ commitment to ensuring a seamless experience for all
          attendees, regardless of last-minute adjustments.
          <h2 className="cacellation-h2">Refund/ Cancellation Policy:</h2>
          <p className="cacellation-p">
            Customer will receive refund amount to their respective payment
            methods in 7 to 10 working days and will reflect in their bank
            account / credit / debit cards based on their Bank’s policies.
            <br />
            <br />
            If the registrant is unable to attend, and is not in a position to
            transfer his/her participation to another person or event, then the
            following refund arrangements apply:
            <br />
            <br />
            Keeping in view of advance payments towards Venue, Printing,
            Shipping, Hotels and other overheads, we had to keep Refund Policy
            is as following slabs-
            <br />
            <br />
            Before 60 days of the conference: Eligible for Full Refund less{" "}
            <strong>$200 </strong>
            service Fee
            <br />
            <br />
            Within 60-30 days of Conference: Eligible for{" "}
            <strong>50% of payment </strong> Refund
            <br />
            <br />
            Within 30 days of Conference:{" "}
            <strong>Not eligible for Refund </strong>
            <br />
            <br />
            E-Poster, video presentations & Discounted Payments will not be
            refunded.
            <br />
            <br />
            If we offered a discount package and provided you with free
            accommodation with only nominal payment, and you decide to withdraw
            from participating in the conference for any reason, please note
            that refunds will not be issued. This is because arrangements have
            already been made on your behalf at the venue, and payments have
            been rendered to the hotel.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CancellationPolicy;
