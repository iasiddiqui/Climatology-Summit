import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/navbar";

const App = () => (
  <BrowserRouter>
    {/* <Navbar />  */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Define other routes here */}
    </Routes>
  </BrowserRouter>
);

export default App;
