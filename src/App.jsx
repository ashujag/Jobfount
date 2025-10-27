import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import JobfountHero from './Components/Hero.jsx';
import CoreServices from './Components/CoreSection.jsx';
import PrometricLicensing from './Components/PrometricLicensing.jsx';
import PartnershipSection from './Components/PartnershipSection.jsx';
import JobfountFooter from './Components/Footer.jsx';
import HireTalentPage from './Components/HireTalent.jsx';
import FindJobsPage from './Components/FindJobs.jsx';
import ContactUs from './Components/Contact.jsx';
import './App.css';

function HomePage() {
  const prometricLicensingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to contact section
    if (location.state?.scrollToContact) {
      // Delay to ensure page is fully loaded and rendered
      const timer = setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      <JobfountHero prometricLicensingRef={prometricLicensingRef} />
      <CoreServices />
      <PrometricLicensing ref={prometricLicensingRef} />
      <PartnershipSection />
      <ContactUs /> 
      <JobfountFooter /> 
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/findjobs" element={<FindJobsPage />} />
      <Route path="/hiretalents" element={<HireTalentPage />} />
      <Route path="/licensing" element={<PrometricLicensing />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;