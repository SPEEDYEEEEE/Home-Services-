import React, {useState, useRef, useEffect} from 'react';
import PageTitle from '../../sections/services-section/PageTitle';
import ServiceCategory from '../../sections/services-section/ServiceCategory';
import { blackbg, mech, mech13, mech14, mech15 } from '../../assets/images';
import { autoMobileTestimonials, partnerLogos } from '../../constants';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FlippingCard, ProjectCard } from '../../components/Card';
import Marquee from 'react-fast-marquee';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { logout } from '../../hooks';
import SecondaryFooter from '../../components/SecondaryFooter';
import Footer from '../../components/Footer';

//Real-Time Type
export const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;
  
    if (currentIndex < text.length) { // Change condition to less than (not less than or equal to)
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }
  
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

const AutomobileServicePage = () => {

  const { ref, inView } = useInView({ triggerOnce: true });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

 // Use useLocation to access location object
  const [residentialServices,setResidentialServices] = useState([]);
  const [commercialServices,setCommercialServices] = useState([]);

 //Scroll in Animation
 const location = useLocation();
 useEffect(() => {
   
   // To show sub-services 
   const subServices = location?.state.subServices;
   const resServices = subServices.filter((ser)=>{
     return ser.type ==="residential"
   })
   setResidentialServices([...resServices]);
   const comServices = subServices.filter((ser)=>{
     return ser.type ==="commercial"
   })
   setCommercialServices([...comServices]);

   // To observe state for animation
   const observer = new IntersectionObserver(
     ([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true);
         controlsLeft.start({ x: 0, opacity: 1 });
         controlsRight.start({ x: 0, opacity: 1 });
       } else {
         setIsVisible(false);
         controlsLeft.start({ x: -50, opacity: 0 });
         controlsRight.start({ x: 50, opacity: 0 });
       }
     },
     { threshold: 0.5 }
   );

   if (sectionRef.current) {
     observer.observe(sectionRef.current);
   }

   return () => {
     if (sectionRef.current) {
       observer.unobserve(sectionRef.current);
     }
   };
 }, [controlsLeft, controlsRight]);

 // Logout function
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  //To show specific workers in model based on service-name
  const name = location?.state.serviceName;

  return (
    <div className="container-fluid px-0" style={{ background: 'linear-gradient(to bottom, #1F2937, #D1D5DB)' }}>
      <div className="container mx-auto px-4 py-8" >
        <Link to="/" className="absolute mt-4 ml-4 text-white">
          <FaArrowLeft className="text-3xl" />
        </Link>
        {/* Add logout and dashboard buttons */}
        {isLoggedIn && (
          <div className="absolute top-10 right-14">
            <Link to="/c-dashboard" className="text-white mr-4">
              <button className='hover:cursor-pointer text-white text-xl font-montserrat bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                Dashboard
              </button>
            </Link>
            <button onClick={handleLogout} className='hover:cursor-pointer text-white text-xl font-montserrat bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
              Logout
            </button>
          </div>
        )}
        <PageTitle title="Auto-Mobile Services" />
        
        {/* Hero Section */}
        <section className="mb-8 flex flex-wrap items-center justify-center rounded-3xl" style={{ backgroundImage: `url(${mech})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '700px' }}>
          <div className="rounded-3xl m-6" style={{textAlign: 'center', color: '#fff', fontFamily: 'Montserrat', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', boxSizing: 'border-box'}}>
            <h1 className=' text-3xl font-bold text-slate-100'>Welcome to our professional automobile services! </h1>
            <p className='text-xl text-slate-100'>
              <Typewriter text="Whether you're a private vehicle owner or managing a commercial fleet, we provide comprehensive solutions to keep your vehicles running smoothly. From routine maintenance to advanced diagnostics and repairs, our skilled technicians utilize cutting-edge technology and eco-friendly practices to ensure optimal performance and reliability for your automobiles." delay={50}/>
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className=" my-20">
          <h1 className="text-4xl font-bold font-montserrat text-slate-100 mb-4">Service Categories</h1>
          <h1 className="text-lg text-gray-200 mb-6 font-montserrat">
            Our auto-mobile services cater to both residential and commercial needs. We provide a diverse range of solutions tailored to meet your specific requirements. Whether it's routine maintenance for personal vehicles or specialized care for commercial fleets, our skilled team guarantees outstanding results every time.          </h1>
          <ServiceCategory title="Residential Mechanical Services">
            <div className="mt-6 flex flex-wrap gap-4">
              {residentialServices.map((residential, index) => (
                <ProjectCard key={`residential-${index}`} index={index} {...residential} serviceName={name}/>
              ))}
            </div>
          </ServiceCategory>


          <ServiceCategory title="Commercial Mechanical Services">
            <div className="mt-6 flex flex-wrap gap-4">
              {commercialServices.map((project, index) => (
                <ProjectCard key={`commercial-${index}`} index={index} {...project} serviceName={name}/> 
              ))}
            </div>
          </ServiceCategory>

           {/* Add more service categories as needed */}
         </section> 

        {/* Choose Us */}
        <section className="mt-8">
          <h2 className="text-4xl font-bold font-montserrat text-slate-100 mb-8 text-center">Why Choose Our Auto-Mobile Services</h2>
          <div className="flex justify-center gap-6">
            <FlippingCard
              frontImage={mech13}
              backImage={blackbg}
              frontContent={
                <div className="p-4 rounded-lg m-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', }}>
                  <h3 className="text-2xl font-semibold text-center font-montserrat text-white">Experienced Mechanics</h3>
                </div>
              }
              backContent={
                <div className="rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                  <p className="text-xl font-semibold text-slate-100 text-center font-montserrat pt-40">Our mechanics are highly experienced and trained to deliver top-quality auto-mobile services.</p>
                </div>
              }
            />
            <FlippingCard
              frontImage={mech14}
              backImage={blackbg}
              frontContent={
                <div className="p-4 rounded-lg m-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <h3 className="text-2xl font-semibold text-center font-montserrat text-white">Premium Products</h3>
                </div>
              }
              backContent={
                <div className="rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                  <p className="text-xl font-semibold text-slate-100 text-center font-montserrat pt-40">We use high-quality products and materials to ensure the longevity and performance of your vehicle.</p>
                </div>
              }
            />
            <FlippingCard
              frontImage={mech15}
              backImage={blackbg}
              frontContent={
                <div className="p-4 rounded-lg m-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <h3 className="text-2xl font-semibold text-center font-montserrat text-white">Tailored Solutions</h3>
                </div>
              }
              backContent={
                <div className="rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%' }}>
                  <p className="text-xl font-semibold text-slate-100 text-center font-montserrat pt-40">We offer personalized auto-mobile solutions designed to address the specific needs and preferences of your vehicle.</p>
                </div>
              }
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 px-4 bg-gray-900 text-white my-20 rounded-3xl" ref={ref}>
          <div className="mb-8">
            <p className="text-lg font-semibold mb-2 font-montserrat text-slate-300">What Others Say</p>
            <h2 className="text-4xl font-bold font-montserrat text-slate-100 mb-8 ">Testimonials</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 50 }}
            transition={{ duration: 0.9 }}
          >
            {autoMobileTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl flex flex-col items-start"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: inView ? 1 : 0, translateY: inView ? 0 : 50 }}
                transition={{ duration: 0.9, delay: index * 0.6 }}
              >
                <span className="text-4xl font-bold font-montserrat">"</span>
                <div className="flex items-center mb-4 font-montserrat">
                  <p className="text-lg">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-2" />
                  <p className="text-lg font-bold font-montserrat">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Affiliation */}
        <section>
          <div className="max-container">
            <h2 className="text-4xl font-bold font-montserrat text-slate-800 mb-8 text-center">Our Partners</h2>
            <Marquee direction="right" gradient={true} gradientWidth={50} className='rounded-xl'>
              {partnerLogos.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt='logo'
                  style={{ width: 'auto', height: '60px', marginRight: '40px'}}
                  className='transition-transform transform scale-100 hover:scale-105  hover:shadow-slate-200 hover:shadow-md'
                />
              ))}
            </Marquee>
          </div>
        </section>
        
        {/* Contact Us */}
        <section className=" mt-20">
            <div ref={sectionRef}className="max-container flex justify-between items-start">
              {/* Left Column - Contact Form */}
              <motion.div
                className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4"
                initial={{ x: -50, opacity: 0 }}
                animate={controlsLeft}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold font-montserrat text-slate-800 my-8">Contact Us</h2>
                <form>
                  {/* Add your contact form fields here */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-montserrat">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  {/* Add more fields as needed */}

                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded-md hover:bg-teal-500 font-semibold font-montserrat"
                  >
                    Submit
                  </button>
                </form>
              </motion.div>

              {/* Right Column - Contact Information */}
              <motion.div
                className="w-full lg:w-1/2 p-4 text-center text-gray-700 -mt-3"
                initial={{ x: 50, opacity: 0 }}
                animate={controlsRight}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold font-montserrat text-slate-800 my-8">Our Office</h3>
                {/* Add office details here */}
                <p className='text-xl font-bold font-montserrat'>Address</p>
                <p className="mb-2 font-montserrat">123 Main Street, Cityville</p>
                <br />
                <p className='text-xl font-bold'>Country</p>
                <p className="mb-2 font-montserrat">Australia</p>
                <br />
                <p className='text-xl font-bold font-montserrat'>Contacts</p>
                <p className='font-montserrat'>Email: info@example.com</p>
                <p className='font-montserrat'>Phone: +123 456 7890</p>
              </motion.div>
            </div>
        </section>
        
      </div>
      <Footer />
      <SecondaryFooter/>
    </div>
  )
};

export default AutomobileServicePage