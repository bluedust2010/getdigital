import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Home from './screens/Home/Home';
import Footer from './shared/Footer/Footer';
import AboutUs from './screens/AboutUs/AboutUs';
import Services from './screens/Services/Services';
import Basic from './screens/Services/Basic/Basic';
import ECom from './screens/Services/ECom/ECom';
import Contact from './screens/ContactUs/Contact';
import TermsAndConditions from './screens/Terms/TermsAndConditions';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />} />
        
          <Route path='/services' element={<Services />} />
          <Route path='/services/basic' element={<Basic />} />
          <Route path='/services/ecommerce' element={<ECom />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
