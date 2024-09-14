import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Awards from "./components/Awards/Awards";
import Contact from "./components/Contact/Contact";
import SpeakerGuidline from "./components/SpeakerGuidlines/SpeakerGuidline";
import UpcomingEvent from "./components/UpcomingEvents/UpcomingEvent";
import Venue from "./components/Venue/Venue";
import Register from "./components/Register/Register";

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
    </Routes>
  </BrowserRouter>
);

export default App;
