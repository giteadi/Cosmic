import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactUs";
import AboutUsPage from "./pages/AboutUs";
import PortfolioPage from "./pages/Projects";
import ServicesPage from "./pages/Service";
import Navbar from "./components/Nav";
import ClientLogos from "./pages/ClientLogo";

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/clientLogo" element={<ClientLogos/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/projects' element={<PortfolioPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
