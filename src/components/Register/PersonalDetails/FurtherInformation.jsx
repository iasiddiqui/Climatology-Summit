import React from 'react';

const FurtherInformation = () => {
  return (
    <div className="further-information">
      <h2>Further Information</h2>
      <div>
        <label>Country</label>
        <select>
          <option>Select Country</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>
      <div>
        <label>Abstract Category</label>
        <select>
          <option>Select Category</option>
          <option>Science</option>
          <option>Technology</option>
        </select>
      </div>
      <div>
        <label>Full Postal Address</label>
        <textarea placeholder="Enter your address"></textarea>
      </div>
    </div>
  );
}

export default FurtherInformation;
