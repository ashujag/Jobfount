import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import JobfountHero from './Components/Hero.jsx';
import CoreServices from './Components/CoreSection.jsx';
import PrometricLicensing from './Components/PrometricLicensing.jsx';
import PartnershipSection from './Components/PartnershipSection.jsx';
import JobfountFooter from './Components/Footer.jsx';
import HireTalentPage from './Components/HireTalent.jsx';
import FindJobsPage from './Components/FindJobs.jsx'; // Import the FindJobs component
import ContactUs from './Components/Contact.jsx';
import './App.css';

function App() {
  const prometricLicensingRef = useRef(null);

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <JobfountHero prometricLicensingRef={prometricLicensingRef} />
          <CoreServices />
          <PrometricLicensing ref={prometricLicensingRef} />
          <PartnershipSection />
          <ContactUs /> 
          <JobfountFooter /> 
        </div>
      } />
      <Route path="/findjobs" element={<FindJobsPage />} />
      <Route path="/hiretalents" element={<HireTalentPage />} />
      <Route path="/licensing" element={<PrometricLicensing />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
