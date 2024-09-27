import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Award.css";
import Footer from "../Home/Footer/Footer.jsx";
import GetInTouch from "../GetInTouch/GetInTouch.jsx";
import ContactUs from "../ContactUsForm/ContactUs.jsx";
import AwardFaqs from "./Faqs/AwardFaq.jsx";

const Awards = () => {
  // Define animation variants
  const pageVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="conference-award-nomination"
      initial="hidden"
      animate="visible"
      variants={pageVariant}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <motion.img
          className="hero-picture"
          src="public/pictures/awards.jpg"
          alt="Hero"
          initial="hidden"
          animate="visible"
          variants={pageVariant}
        />
        <div className="overlay">
          <motion.h1
            className="hero-h1"
            initial="hidden"
            animate="visible"
            variants={pageVariant}
          >
            Awards Nomination
          </motion.h1>
        </div>
      </div>

      {/* Award Nomination Section */}
      <motion.div
        className="award-nomination"
        initial="hidden"
        animate="visible"
        variants={pageVariant}
      >
        <h1 className="award-nomination-h1">Conference Awards Nomination</h1>
        <p className="award-nomination-p">
          We are delighted to present an overview our{" "}
          <strong>Conference Awards nomination</strong> process and guidelines,
          designed to recognize and celebrate the achievements of exceptional
          scholars, students, scientists, physicians, and professionals. Your
          contributions deserve the recognition they merit, and we invite you to
          participate in this prestigious opportunity.
        </p>
        <p className="award-nomination-p">
          <span className="award-nomination-span">Expressing Interest:</span> If
          you believe your work deserves recognition, we encourage you to submit
          a 100-word abstract. This abstract should succinctly outline the key
          points within your field of expertise, allowing us to understand the
          depth and significance of your contributions.
        </p>
        <p className="award-nomination-p">
          <span className="award-nomination-span">
            Biography and Publications:
          </span>{" "}
          To showcase your accomplishments, we kindly request a brief 50-word
          biography highlighting your outstanding achievements. Additionally,
          please provide a minimum of five publications in reputed journals to
          establish your expertise and impact in your respective field.
        </p>
        <p className="award-nomination-p">
          <span className="award-nomination-span">
            Thorough Review and Verification:
          </span>{" "}
          Each nomination undergoes a comprehensive review and verification
          process by our esteemed organizing committee and local team. Their
          expert evaluation focuses on assessing the quality, significance, and
          impact of your contributions, ensuring a fair and rigorous selection
          process.
        </p>
        <p className="award-nomination-p">
          <span className="award-nomination-span">The Opportunity Ahead:</span>{" "}
          Selected participants will have the honor of presenting and
          participating in our upcoming series of esteemed events. These include
          the Global Tech Summit series, dedicated to shaping the future of
          technology; the Health Summit series, committed to making healthcare
          more affordable; and the Global Pharma Summit series, focused on
          accessible medicine for all. These transformative gatherings and
          pre-conference meetings will take place in major cities worldwide,
          bustling urban centers that serve as hubs of commerce, culture, and
          innovation.
        </p>
        <p className="award-nomination-p">
          <span className="award-nomination-span">
            Unveiling Global Cityscapes:
          </span>{" "}
          Among the top 50 major cities, Tokyo, Delhi, Shanghai, Sao Paulo, and
          Mexico City represent the dynamic urban landscapes of Asia, Latin
          America, and beyond. Cairo and Mumbai showcase the vibrant spirit and
          historical significance of cities in Africa and South Asia. Beijing,
          Osaka, Riyadh, and Dubai exemplify the rapid growth and economic
          prowess of cities in China and the Middle East. Istanbul bridges the
          gap between Europe and Asia, while Buenos Aires and Rio de Janeiro
          bring the vibrant essence of South America to the forefront. These
          cities, alongside other remarkable destinations like London, Moscow,
          New York City, Sydney, Hyderabad, Chennai, Vizag, Mumbai,
          Johannesburg, and Los Angeles, contribute to the global tapestry of
          diverse cultures, languages, and opportunities. Each city offers its
          own unique charm and attractions, attracting people from around the
          world and fostering the interconnectedness of our global society.
        </p>
        <p className="award-nomination-p">
          For Detailed Guidelines and Further Information: For a comprehensive
          understanding of the guidelines and additional information, please
          visit the award nomination pages on our websites. If you have any
          questions or require assistance, our dedicated committee members are
          readily available to support and guide you throughout the nomination
          process. Your journey towards recognition begins with a single step,
          and we are here to accompany you every step of the way. Together, let
          us celebrate excellence, shape the future, and inspire generations to
          come. We extend our heartfelt gratitude for your unwavering commitment
          to maintaining standards and making a remarkable difference in the
          world of academia, research, and innovation.
        </p>
      </motion.div>

      <GetInTouch />
      <ContactUs />
      <AwardFaqs />
      <Footer />
    </motion.div>
  );
};

export default Awards;
