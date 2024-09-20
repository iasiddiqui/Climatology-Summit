import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Awards from "./components/Awards/Awards";
import Contact from "./components/Contact/Contact";
import SpeakerGuidline from "./components/SpeakerGuidlines/SpeakerGuidline";
import UpcomingEvent from "./components/UpcomingEvents/UpcomingEvent";
import Venue from "./components/Venue/Venue";
import Register from "./components/Register/Register";
import HealthConference from "./components/HealthConference/HealthConference";
import EnergyConference from "./components/EnergyConference/EnergyConference";
import DynamicsConference from "./components/DynamicsConference/DynamicsConference";
import BiodiversityConference from "./components/BiodiversityConference/BiodiversityConference";
import GreenTechnologyBrochure from "./components/GreenTechnologyBrouchoure/GreenTechnologyBrochure";

const App = () => (
  <BrowserRouter>
    {/* <Navbar />  */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/speaker-guidline" element={<SpeakerGuidline/>} />
      <Route path="/upcoming-event" element={<UpcomingEvent/>} />
      <Route path="/venue" element={<Venue/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/climate-change-conference" element={<HealthConference/>} />
      <Route path="/green-technologies-conference" element={<EnergyConference/>} />
      <Route path="/ocean-health-conference" element={<DynamicsConference/>} />
      <Route path="/biodiversity-conference" element={<BiodiversityConference/>} />
      <Route path="green-technologies-brochure" element={<GreenTechnologyBrochure/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
