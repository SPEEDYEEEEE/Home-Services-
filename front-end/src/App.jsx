import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutomobileService, CarpenterService, CleaningServices, DoctorService, ElectricianService, PlumberService } from './pages/services-pages';
import { AdminDashboard, CustomerDashboard, CustomerRegister, Home, LoginPage, WorkerDashboard, WorkerRegister } from './pages';
import GardnerServicePage from './pages/services-pages/GardnerServicePage';
import HomesecurityServicePage from './pages/services-pages/HomesecurityServicePage';
import Loader from './components/Loader';
import { ServiceProvider } from './hooks/service-hook';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-10 right-10 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        onClick={scrollToTop}
        className="bg-gradient-to-r from-black to-slate-600 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
      >
        <FaArrowUp className="inline-block mr-2" />
        Scroll To Top
      </button>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader will be displayed for 3 seconds
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ServiceProvider>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          {/* home route */}
          <Route path="/" element={<Home />} />
          {/* login and register routes */}
          <Route path='/login' element={<LoginPage />} />
          <Route path="/w-register" element={<WorkerRegister />} />
          <Route path="/c-register" element={<CustomerRegister />} />
          {/* services Pages */}
          <Route path='/clean-services' element={<CleaningServices />} />
          <Route path='/electric-services' element={<ElectricianService />} />
          <Route path='/plumber-services' element={<PlumberService />} />
          <Route path='/doctor-services' element={<DoctorService />} />
          <Route path='/carpenter-services' element={<CarpenterService />} />
          <Route path='/automobile-services' element={<AutomobileService />} />
          <Route path='/gardener-services' element={<GardnerServicePage />} />
          <Route path='/security-services' element={<HomesecurityServicePage />} />
          {/* Dashboard Pages */}
          <Route path='/c-dashboard' element={<CustomerDashboard />} />
          <Route path='/w-dashboard' element={<WorkerDashboard />} />
          <Route path='/a-dashboard' element={<AdminDashboard />} />
        </Routes>
        <ScrollToTopButton />
        {/* <Footer/>
        <SecondaryFooter/> */}
      </BrowserRouter>
      </ServiceProvider>
    </>
  );
}