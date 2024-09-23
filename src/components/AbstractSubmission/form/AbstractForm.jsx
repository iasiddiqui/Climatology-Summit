import "./AbstractForm.css";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReactFlagsSelect from "react-flags-select";
import "react-phone-input-2/lib/style.css";
import ForumIcon from '@mui/icons-material/Forum';
import MicIcon from '@mui/icons-material/Mic';

const AbstractForm = () => {
  const [selected, setSelected] = useState("");
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    abstractSession: "",
    abstractType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("abstract", file);
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert("File and form submitted successfully!");
      } else {
        alert("Failed to submit.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="abstract-container">
      <div className="abstract-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Country:
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select Country"
              searchable
              searchPlaceholder="Search countries"
              className="menu-flags"
            />
          </label>
          <label>
            Phone Number:
            <PhoneInput
              country={"in"}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phoneNumber",
                required: true,
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Abstract Session:
            <select
              name="abstractSession"
              value={formData.abstractSession}
              onChange={handleChange}
              required
            >
              <option value="">Select Session</option>
              <option value="session1">Session 1</option>
              <option value="session2">Session 2</option>
              <option value="session3">Session 3</option>
            </select>
          </label>
          <label>
            Abstract Type:
            <select
              name="abstractType"
              value={formData.abstractType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="oral">Oral</option>
              <option value="poster">Poster</option>
              <option value="workshop">Workshop</option>
            </select>
          </label>

          <label htmlFor="file-upload" className="file-upload-label">
            File Upload
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept=".pdf, .doc, .docx"
          />
          <button className="abstract-form-btn" type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="presentation-forum">
        <h2 className="presentation-forum-h2"><ForumIcon fontSize="//#endregion" />Presentation Forum</h2>
        <div className="presentation-forum-list">
          <li className="presentation-forum-li"><MicIcon />Keynote Forum</li>
          <li className="presentation-forum-li"><MicIcon />Mini-Plenary Sessions</li>
          <li className="presentation-forum-li"><MicIcon />
            Distinguished Speakers Forum
          </li>
          <li className="presentation-forum-li"><MicIcon />Student forum</li>
          <li className="presentation-forum-li"><MicIcon />Poster Sessions</li>
          <li className="presentation-forum-li"><MicIcon />Young Researchers Forum</li>
          <li className="presentation-forum-li"><MicIcon />Educational Workshops</li>
          <li className="presentation-forum-li"><MicIcon />Research Workshop</li>
          <li className="presentation-forum-li"><MicIcon />Corporate Workshop</li>
          <li className="presentation-forum-li"><MicIcon />
            Highlights Of The Day Sessions
          </li>
          <li className="presentation-forum-li"><MicIcon />Meet The Professor</li>
          <li className="presentation-forum-li"><MicIcon />Educational Sessions</li>
          <li className="presentation-forum-li"><MicIcon />Training Programs</li>
        </div>
        <div className="presentation-forum-link">
          <a
            href="/climate-change-abstract-submission"
            className="presentation-forum-a"
          >
            Journal Publications <span>Go to Publications Page.</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
