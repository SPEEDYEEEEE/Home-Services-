import React, {useContext, useEffect, useState} from 'react';
import { logo } from "../assets/images/index";
import Loader from '../components/Loader'; // Import the Loader component
import Carousel from 'react-multi-carousel';
import ServiceContext from '../hooks/service-hook';
import { ServiceCard } from '../components/Card';
import { responsive } from '../hooks';

//To get userData for Profile Information in user's Dashboard
const userData = {
  //Personal Info
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  fatherName: localStorage.getItem('fatherName'),
  cnic: localStorage.getItem('cnic'),
  gender: localStorage.getItem('gender'),
  countryCode: localStorage.getItem('countryCode'),
  phone: localStorage.getItem('phoneNo'),
  //Address
  country: localStorage.getItem('country'),
  city: localStorage.getItem('city'),
  town: localStorage.getItem('town'),
  homeAddress: localStorage.getItem('homeAddress'),
  //Account
  userName: localStorage.getItem('userName'),
  email: localStorage.getItem('email'),
  //Skills
  //skills: JSON.parse(localStorage.getItem('skills')),
};

const CustomerDashboard = () => {
  // State to track selected heading
  const [selectedHeading, setSelectedHeading] = useState('Services Booked');
  const [loading, setLoading] = useState(true);
  const services = useContext(ServiceContext);

  // Function to handle click on sidebar heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader will be displayed for 5 seconds
  }, []);

  if (loading) {
    return <Loader />; // Render the Loader component while loading
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-300 via-gray-500 to-gray-900">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-400 text-white w-[300px] py-6 px-4 flex flex-col items-center">
        <a href="/">
          <img src={logo} alt="logo" width={170} height={32}/> {/* Adjust size and margin */}
        </a>
        <h2 className="text-3xl font-montserrat font-semibold my-4 border-b border-gray-200 pb-2">Home Services</h2>
        <ul className='font-montserrat text-center pt-6 space-y-4'>
          {['Services Booked', 'Book New Service', 'Profile Information', 'Reviews and Ratings', 'Recommended Services', 'Notifications'].map((heading) => (
            <li 
              key={heading}
              onClick={() => handleHeadingClick(heading)} 
              className={`cursor-pointer mb-4 py-3 px-6 text-xl rounded transition-all duration-300
                ${selectedHeading === heading ? 'bg-black text-white' : 'bg-slate-500 text-white'}
                hover:bg-slate-700 transform hover:scale-105`}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 py-6 px-4">
        <h2 className="text-4xl font-semibold font-montserrat mb-4 text-center border-b border-black">Customer Dashboard</h2>

        {/* Display content based on selected heading */}
        {selectedHeading === 'Services Booked' && (
          <div>
            <h3>Services Booked</h3>
          </div>
        )}

        {selectedHeading === 'Book New Service' && (
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Apply max-width and centering to contain the carousel within the page */}
            <h3 className="text-3xl font-semibold font-montserrat text-center mt-16 mb-10 text-white-100">Book New Service</h3>
            <div className="overflow-hidden">
              <Carousel swipeable={true} draggable={true} showDots={false} responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} slidesToScroll={1}>
                {/* Render each ServiceCard inside a div */}
                {services.map((service, index) => (
                  <div key={index} className='carousel-item text-center mb-2'>
                    <ServiceCard service={service} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}

        {selectedHeading === 'Profile Information' && (
          <div>
            {selectedHeading === 'Profile Information' && (
              <div class="max-w-lg mx-auto mt-8 p-12 bg-gray-500 rounded-lg">
                <h2 class="text-center text-gray-100 mb-6 text-3xl font-montserrat font-semibold">Profile Information</h2>
                <div class="mb-6">
                    <h4 class="text-gray-200 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-medium font-montserrat">Personal Info</h4>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">First Name:</strong> {userData.firstName}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Last Name:</strong> {userData.lastName}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Phone No:</strong> {userData.countryCode}-{userData.phone}</p>
                </div>
                <div class="mb-6">
                    <h4 class="text-gray-200 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-montserrat font-medium">Address</h4>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Country:</strong> {userData.country}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">City:</strong> {userData.city}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Town:</strong> {userData.town}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Home Address:</strong> {userData.homeAddress}</p>
                </div>
                <div class="mb-6">
                    <h4 class="text-gray-200 border-b-2 border-gray-300 font-montserrat pb-2 mb-4 text-lg font-medium">Account</h4>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">User Name:</strong> {userData.userName}</p>
                    <p className='font-montserrat'><strong class="text-gray-300 font-montserrat">Email:</strong> {userData.email}</p>
                </div>
              </div>            
            )}
          </div>
        )}

        {/* {selectedHeading === 'Payment History' && (
          <div>
            <h3>Payment History</h3>
            Display payment history
          </div>
        )}

        {selectedHeading === 'Messages' && (
          <div>
            <h3>Messages</h3>
            Messaging system
          </div>
        )} */}

        {selectedHeading === 'Reviews and Ratings' && (
          <div>
            <h3>Reviews and Ratings</h3>
            {/* Display reviews and ratings */}
            {/* Option to leave new review */}
          </div>
        )}

        {selectedHeading === 'Recommended Services' && (
          <div>
            <h3>Recommended Services</h3>
            {/* Display recommended services */}
          </div>
        )}

        {selectedHeading === 'Notifications' && (
          <div>
            <h3>Notifications</h3>
            {/* Display notifications */}
          </div>
        )}
      </div>
    </div>
  );
};

const WorkerDashboard = () => {

  // State to track selected heading
  const [selectedHeading, setSelectedHeading] = useState('Services Booked');
  const [loading, setLoading] = useState(true);

  // Function to handle click on sidebar heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };
  
  useEffect(() => {
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader will be displayed for 5 seconds
  }, []);

  if (loading) {
    return <Loader />; // Render the Loader component while loading
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-300 via-gray-500 to-gray-900">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-400 text-white w-[300px] py-6 px-4 flex flex-col items-center">
        <a href="/">
          <img src={logo} alt="logo" width={170} height={32}/> {/* Adjust size and margin */}
        </a>
        <h2 className="text-3xl font-montserrat font-semibold my-4 border-b border-gray-200 pb-2">Home Services</h2>
        <ul className='font-montserrat text-center pt-6 space-y-4'>
          {['Services Booked', 'Book New Service', 'Profile Information', 'Reviews and Ratings', 'Recommended Services', 'Notifications'].map((heading) => (
            <li 
              key={heading}
              onClick={() => handleHeadingClick(heading)} 
              className={`cursor-pointer mb-4 py-3 px-6 text-xl rounded transition-all duration-300
                ${selectedHeading === heading ? 'bg-black text-white' : 'bg-slate-500 text-white'}
                hover:bg-slate-700 transform hover:scale-105`}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 py-6 px-4">
        <h2 className="text-4xl font-semibold font-montserrat mb-4 text-center border-b border-black">Worker Dashboard</h2>

        {/* Display content based on selected heading */}
        {selectedHeading === 'Services Booked' && (
          <div>
            <h3>Services Booked</h3>
          </div>
        )}

        {selectedHeading === 'Book New Service' && (
          <div>
            <h3>Book New Service</h3>
            {/* Form to book new service */}
          </div>
        )}

        {selectedHeading === 'Profile Information' && (
          <div>
            {selectedHeading === 'Profile Information' && (
              <div className="max-w-4xl mx-auto mt-16 p-10 bg-gray-500 rounded-lg font-montserrat">
              <h3 className="text-center text-gray-800 mb-6 text-3xl font-semibold">Profile Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-6">
                    <h4 className="text-gray-100 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-medium">Personal Info</h4>
                    <p><strong className="text-gray-800">First Name:</strong> {userData.firstName}</p>
                    <p><strong className="text-gray-800">Last Name:</strong> {userData.lastName}</p>
                    <p><strong className="text-gray-800">Father's Name:</strong> {userData.fatherName}</p>
                    <p><strong className="text-gray-800">CNIC:</strong> {userData.cnic}</p>
                    <p><strong className="text-gray-800">Gender:</strong> {userData.gender}</p>
                    <p><strong className="text-gray-800">Phone No:</strong> {userData.countryCode}-{userData.phone}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-gray-100 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-medium">Address</h4>
                    <p><strong className="text-gray-800">Country:</strong> {userData.country}</p>
                    <p><strong className="text-gray-800">City:</strong> {userData.city}</p>
                    <p><strong className="text-gray-800">Town:</strong> {userData.town}</p>
                    <p><strong className="text-gray-800">Address:</strong> {userData.homeAddress}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <h4 className="text-gray-100 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-medium">Credentials</h4>
                    <p><strong className="text-gray-800">Username:</strong> {userData.userName}</p>
                    <p><strong className="text-gray-800">Email:</strong> {userData.email}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-gray-100 border-b-2 border-gray-300 pb-2 mb-4 text-lg font-medium">Skills</h4>
                    {userData.skills && userData.skills.length > 0 ? (
                      userData.skills.map((skill, index) => (
                        <div key={index} className="mb-2">
                          <p><strong className="text-gray-800">Skill Name:</strong> {skill.name}</p>
                          <p><strong className="text-gray-800">Level:</strong> {skill.level}</p>
                          <p><strong className="text-gray-800">Experience:</strong> {skill.experience} years</p>
                        </div>
                      ))
                    ) : (
                      <p>No skills found.</p>
                    )}
                  </div>
                </div>
              </div>
              </div>
            )}
          </div>
        )}

        {/* {selectedHeading === 'Payment History' && (
          <div>
            <h3>Payment History</h3>
            Display payment history
          </div>
        )}

        {selectedHeading === 'Messages' && (
          <div>
            <h3>Messages</h3>
            Messaging system
          </div>
        )} */}

        {selectedHeading === 'Reviews and Ratings' && (
          <div>
            <h3>Reviews and Ratings</h3>
            {/* Display reviews and ratings */}
            {/* Option to leave new review */}
          </div>
        )}

        {selectedHeading === 'Recommended Services' && (
          <div>
            <h3>Recommended Services</h3>
            {/* Display recommended services */}
          </div>
        )}

        {selectedHeading === 'Notifications' && (
          <div>
            <h3>Notifications</h3>
            {/* Display notifications */}
          </div>
        )}
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  // State to track selected heading
  const [selectedHeading, setSelectedHeading] = useState('Services Booked');
  const [loading, setLoading] = useState(true);

  // Function to handle click on sidebar heading
  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  useEffect(() => {
    window.location.reload();
    // Simulate a data fetching process
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader will be displayed for 5 seconds
  }, []);

  if (loading) {
    return <Loader />; // Render the Loader component while loading
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-400 text-white w-[300px] py-6 px-4 flex flex-col items-center">
        <a href="/">
          <img src={logo} alt="logo" width={170} height={32}/> {/* Adjust size and margin */}
        </a>
        <h2 className="text-3xl font-montserrat font-semibold my-4 border-b border-gray-200 pb-2">Home Services</h2>
        <ul className='font-montserrat text-center pt-6 space-y-4'>
          {['Services Booked', 'Book New Service', 'Profile Information', 'Reviews and Ratings', 'Recommended Services', 'Notifications'].map((heading) => (
            <li 
              key={heading}
              onClick={() => handleHeadingClick(heading)} 
              className={`cursor-pointer mb-4 py-3 px-6 text-xl rounded transition-all duration-300
                ${selectedHeading === heading ? 'bg-black text-white' : 'bg-slate-500 text-white'}
                hover:bg-slate-700 transform hover:scale-105`}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 py-6 px-4">
        <h2 className="text-4xl font-semibold font-montserrat mb-4 text-center border-b border-black">Admin Dashboard</h2>

        {/* Display content based on selected heading */}
        {selectedHeading === 'Services Booked' && (
          <div>
            <h3>Services Booked</h3>
          </div>
        )}

        {selectedHeading === 'Book New Service' && (
          <div>
            <h3>Book New Service</h3>
            {/* Form to book new service */}
          </div>
        )}

        {selectedHeading === 'Profile Information' && (
          <div>
            {selectedHeading === 'Profile Information' && (
                <div>
                    <h3>Profile Information</h3>
                    <p>Username: {userData.userName}</p>
                    {/* Display other user information */}
                </div>
            )}
          </div>
        )}

        {/* {selectedHeading === 'Payment History' && (
          <div>
            <h3>Payment History</h3>
            Display payment history
          </div>
        )}

        {selectedHeading === 'Messages' && (
          <div>
            <h3>Messages</h3>
            Messaging system
          </div>
        )} */}

        {selectedHeading === 'Reviews and Ratings' && (
          <div>
            <h3>Reviews and Ratings</h3>
            {/* Display reviews and ratings */}
            {/* Option to leave new review */}
          </div>
        )}

        {selectedHeading === 'Recommended Services' && (
          <div>
            <h3>Recommended Services</h3>
            {/* Display recommended services */}
          </div>
        )}

        {selectedHeading === 'Notifications' && (
          <div>
            <h3>Notifications</h3>
            {/* Display notifications */}
          </div>
        )}
      </div>
    </div>
  );
}

export {CustomerDashboard, WorkerDashboard, AdminDashboard}