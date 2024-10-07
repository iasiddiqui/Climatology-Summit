import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="registration-container">
      <div className="registration-type">
        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category">Registration Type</td>

                <td className="registration-option" colSpan="2">
                  Early Bird On/Before September 25, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $799
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $699
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $799
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $599
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $499
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $200
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $300
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category">Registration Type</td>

                <td className="registration-option" colSpan="2">
                  Next Round Registration Date: August 29, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $899
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $999
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $799
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $899
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $599
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $300
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $350
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="registration-section">
          <table className="registration-table">
            <tbody>
              <tr className="registration-row">
                <td className="registration-category">Registration Type</td>

                <td className="registration-option" colSpan="2">
                  Spot Registrations on July 14, 2024
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Speaker Registration</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $999
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $1099
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Delegate</td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Academia $899
                </td>
                <td className="registration-option">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  Business $999
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Student</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $799
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Poster Presentation</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $699
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Online</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $400
                </td>
              </tr>
              <tr className="registration-row">
                <td className="registration-category">Accompanying Person</td>
                <td className="registration-option" colSpan="2">
                  <input type="checkbox" className="registration-checkbox" />{" "}
                  $400
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sponsor-section">
          <h2 className="sponsor-title">Sponsor Registration</h2>
          <table className="sponsor-table">
            <tbody>
              <tr className="sponsor-row">
                <td className="sponsor-category">
                  <input type="checkbox" className="sponsor-checkbox" />{" "}
                  Platinum Sponsor
                </td>
                <td className="sponsor-price">$7500</td>
              </tr>
              <tr className="sponsor-row">
                <td className="sponsor-category">
                  <input type="checkbox" className="sponsor-checkbox" /> Gold
                  Sponsor
                </td>
                <td className="sponsor-price">$6000</td>
              </tr>
              <tr className="sponsor-row">
                <td className="sponsor-category">
                  <input type="checkbox" className="sponsor-checkbox" /> Silver
                  Sponsor
                </td>
                <td className="sponsor-price">$5000</td>
              </tr>
              <tr className="sponsor-row">
                <td className="sponsor-category">
                  <input type="checkbox" className="sponsor-checkbox" />{" "}
                  Exhibitor
                </td>
                <td className="sponsor-price">$3000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
