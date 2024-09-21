import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <div>
        <label>Title</label>
        <select>
          <option>Select Any</option>
          <option>Mr.</option>
          <option>Ms.</option>
        </select>
      </div>
      <div>
        <label>First Name</label>
        <input type="text" placeholder="First Name" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" />
      </div>
    </div>
  );
}

export default PersonalDetails;
