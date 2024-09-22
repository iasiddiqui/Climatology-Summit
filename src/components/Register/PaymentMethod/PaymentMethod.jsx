import React, { useState } from "react";
import registrationData from "./RegistrationData"; // Import the registration data
import "./PaymentMethod.css";

function PaymentInfo() {
  const [registrationType, setRegistrationType] = useState(
    "Early Bird On/Before September 25, 2024"
  );
  const [selectedOptions, setSelectedOptions] = useState({
    academia: [],
    business: [],
    accommodation: "",
    participants: 1,
  });
  const [checkinDate, setCheckinDate] = useState("");

  const { registrationPrices, accommodationPrices } = registrationData; // Destructure data

  const handleRegistrationTypeChange = (event) => {
    setRegistrationType(event.target.value);
    setSelectedOptions({ academia: [], business: [], accommodation: "", participants: 1 });
  };

  const handleCheckboxChange = (index, category) => {
    const newSelection = [...selectedOptions[category]];
    if (newSelection.includes(index)) {
      newSelection.splice(newSelection.indexOf(index), 1);
    } else {
      newSelection.push(index);
    }
    setSelectedOptions({ ...selectedOptions, [category]: newSelection });
  };

  const handleAccommodationChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      accommodation: event.target.value,
    });
  };

  const handleParticipantsChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      participants: parseInt(event.target.value, 10),
    });
  };

  const handleCheckinDateChange = (event) => {
    setCheckinDate(event.target.value);
  };

  const registrationTypeKey =
    registrationType === "Early Bird On/Before September 25, 2024"
      ? "early"
      : registrationType === "Next Round Registration Date: August 29, 2024"
      ? "nextRound"
      : registrationType === "Spot Registrations on July 14, 2024"
      ? "spot"
      : "student";

  const calculateTotalPrice = () => {
    const academiaPrice = selectedOptions.academia.reduce(
      (total, index) =>
        total + registrationPrices.academia[registrationTypeKey][index],
      0
    );

    const businessPrice = selectedOptions.business.reduce(
      (total, index) =>
        total + registrationPrices.business[registrationTypeKey][index],
      0
    );

    const accommodationPrice = selectedOptions.accommodation
      ? accommodationPrices[selectedOptions.accommodation].reduce(
          (total, price) => total + price,
          0
        )
      : 0;

    const totalParticipantsPrice = academiaPrice * selectedOptions.participants;
    const totalPrice = totalParticipantsPrice + businessPrice + accommodationPrice;

    return totalPrice;
  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <div className="registration-types">
        <label>
          <input
            type="radio"
            value="Early Bird On/Before September 25, 2024"
            checked={registrationType === "Early Bird On/Before September 25, 2024"}
            onChange={handleRegistrationTypeChange}
          />
          Early Bird On/Before September 25, 2024
        </label>
        <label>
          <input
            type="radio"
            value="Next Round Registration Date: August 29, 2024"
            checked={registrationType === "Next Round Registration Date: August 29, 2024"}
            onChange={handleRegistrationTypeChange}
          />
          Next Round Registration Date: August 29, 2024
        </label>
        <label>
          <input
            type="radio"
            value="Spot Registrations on July 14, 2024"
            checked={registrationType === "Spot Registrations on July 14, 2024"}
            onChange={handleRegistrationTypeChange}
          />
          Spot Registrations on July 14, 2024
        </label>
        <label>
          <input
            type="radio"
            value="Student Registration"
            checked={registrationType === "Student Registration"}
            onChange={handleRegistrationTypeChange}
          />
          Student Registration
        </label>
      </div>

      <div className="registration-table">
        <table>
          <thead>
            <tr>
              <th>Registration Type</th>
              <th>Academia</th>
              <th>Business</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Speaker Registration</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(0, "academia")}
                  checked={selectedOptions.academia.includes(0)}
                />{" "}
                {registrationPrices.academia[registrationTypeKey][0]}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(0, "business")}
                  checked={selectedOptions.business.includes(0)}
                />{" "}
                {registrationPrices.business[registrationTypeKey][0]}
              </td>
            </tr>
            <tr>
              <td>Delegate</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(1, "academia")}
                  checked={selectedOptions.academia.includes(1)}
                />{" "}
                {registrationPrices.academia[registrationTypeKey][1]}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(1, "business")}
                  checked={selectedOptions.business.includes(1)}
                />{" "}
                {registrationPrices.business[registrationTypeKey][1]}
              </td>
            </tr>
            <tr>
              <td>Student Registration</td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(0, "academia")}
                  checked={selectedOptions.academia.includes(0)}
                />{" "}
                {registrationPrices.academia.student[0]}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(0, "business")}
                  checked={selectedOptions.business.includes(0)}
                />{" "}
                {registrationPrices.business.student[0]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="accommodation-registration">
        <h2>Accommodation Registration</h2>
        <select onChange={handleAccommodationChange}>
          <option value="">Select Accommodation</option>
          <option value="2-nights">For 2 Nights</option>
          <option value="3-nights">For 3 Nights</option>
          <option value="5-nights">For 5 Nights</option>
        </select>
      </div>

      <div className="participants">
        <label htmlFor="participants">
          No. Of Participants. (699 Each Under Speaker Business Category)
        </label>
        <select id="participants" onChange={handleParticipantsChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="checkin-date">
        <label htmlFor="checkin-date">Checkin Date:</label>
        <input
          type="date"
          id="checkin-date"
          value={checkinDate}
          onChange={handleCheckinDateChange}
        />
      </div>

      <div className="registration-details">
        <p>Registration Price: ${calculateTotalPrice()}</p>
        <p>No. Of Participants: {selectedOptions.participants}</p>
        <p>Checkin Date: {checkinDate}</p>
      </div>
    </div>
  );
}

export default PaymentInfo;
