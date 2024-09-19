import React from 'react';
import './AboutConference.css';
import { CalendarMonth, Place, CloudDownload, Bookmark } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from React Router
import aboutConferenceData from './AboutConferenceData';

const AboutConference = () => {
  const { conferenceDetails, aboutConference } = aboutConferenceData;

  return (
    <div className="conference-page">
      <section className="details-section">
        <div className="details-cards">
          <div className="card conference-details">
            <img src="public/pictures/upcoming img 1.jpg" alt="Conference Details" />
            <div className="card-content">
              <h3>Conference Details</h3>
              <div className="info">
                <CalendarMonth />
                <p className='about-conference-date'>Dates: <strong>{conferenceDetails.date}</strong></p>
              </div>
              <div className="info">
                <Place />
                <p className='about-conference-date'>Venue: <strong>{conferenceDetails.venue}</strong></p>
              </div>
            </div>
          </div>

          <div className="card brochure-download">
            <img src="public/pictures/upcoming img 2.jpg" alt="Brochure Download" />
            <div className="card-content">
              <CloudDownload />
              <h3>Brochure Download</h3>
              <Link to="/">
                <button>Download Here</button>
              </Link>
            </div>
          </div>

          <div className="card program-download">
            <img src="public/pictures/upcoming img 3.jpg" alt="Tentative Program" />
            <div className="card-content">
              <Bookmark />
              <h3>Tentative Program</h3>
              <a href={conferenceDetails.programDownloadLink} download>
                <button>Download Here</button>
              </a>
            </div>
          </div>

          <div className="card speaker-guidelines">
            <img src="public/pictures/upcoming img 4.jpg" alt="Speaker Guidelines" />
            <div className="card-content">
              <Bookmark />
              <h3>Speaker Guidelines</h3>
              <Link to="/">
                <button>Download Here</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="about-conference">
          <h2 className='about-conference-h2'>{aboutConference.title}</h2>
          <p className='about-conference-p'>
            {aboutConference.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutConference;
