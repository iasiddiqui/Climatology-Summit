import React from 'react'
import "./GreenTechnologyBrochure.css"
import Navbar from '../Navbar/navbar'
import BrochureForm from './BrochureForm/BrochureForm'
import GetInTouch from '../GetInTouch/GetInTouch'
import ContactUs from '../ContactUsForm/ContactUs'
import Footer from '../Home/Footer/Footer'

const GreenTechnologyBrochure = () => {
  return (
    <>
    <Navbar />
    <div className="brochure-hero">
    <div className="hero-section">
        <img
          className="hero-picture"
          src="public\pictures\awards.jpg"
          alt="Hero"
        />
        <div className="overlay">
          <h1 className="brochure-h1">Green Technologies Brochure Download</h1>
        </div>
      </div>
    </div>
    <BrochureForm />
    <GetInTouch />
    <ContactUs />
    <Footer/>
    </>
  )
}

export default GreenTechnologyBrochure