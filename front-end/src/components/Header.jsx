import React, { useEffect, useState } from 'react';
import { logo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logout } from '../hooks';
import { Modal } from './Modal';

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isRegisterClicked, setRegisterClicked] = useState(false);
//   const [isLoginClicked, setLoginClicked] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//   const [userRole, setUserRole] = useState(localStorage.getItem('userType') || ''); // Get userType from localStorage
//   const [active, setActive] = useState('');

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleRegisterClick = () => {
//     setRegisterClicked(!isRegisterClicked);
//   };

//   const handleLoginClick = () => {
//     setLoginClicked(!isLoginClicked);
//     navi
//   };

//   const closeDialog = () => {
//     setRegisterClicked(false);
//     setLoginClicked(false);
//   };

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     if (scrollTop > 100) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setIsLoggedIn(false);
//     setUserRole('');
//     localStorage.removeItem('token');
//     localStorage.removeItem('userType');
//     localStorage.removeItem('userId'); // Remove userId if you stored it
//   };

//   return (
//     <header className={`bg-gradient-to-r from-slate-950 to-slate-400 padding-x py-4 shadow-md fixed w-full top-0 z-10 ${scrolled ? 'scrolled' : ''}`}>
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={logo} alt="logo" width={129} height={29} className="m-0 w-[100px] h-[60px]"/>
//         </a>
//         <div className="hidden max-lg:block">
//           {isLoggedIn ?
//           (
//             <>
//               <button onClick={handleLogout} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                   Logout
//               </button>
//               {userRole === 'Customer' && (
//                   <Link to="/c-dashboard">
//                       <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                           Customer Dashboard
//                       </button>
//                   </Link>
//               )}
//               {userRole === 'Worker' && (
//                   <Link to="/w-dashboard">
//                       <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                           Worker Dashboard
//                       </button>
//                   </Link>
//               )}
//               {userRole === 'Admin' && (
//                   <Link to="/a-dashboard">
//                       <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                           Admin Dashboard
//                       </button>
//                   </Link>
//               )}
//             </>
//           ) : (
//             <>
//               <img src={hamburger} alt="hamburger icon" width={25} height={25} onClick={toggleMenu} className="cursor-pointer"/>
//               {isMenuOpen && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-slate-700 to-slate-500 z-20">
//                   <ul className="flex flex-col items-center mt-24">
//                     {navLinks.map((item) => (
//                       <li key={item.label}>
//                         <a href={item.href} className="font-montserrat leading-normal text-lg text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 hover:cursor-pointer" onClick={toggleMenu}>
//                           {item.label}
//                         </a>
//                       </li>
//                     ))}
//                     <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat mt-4">
//                       <button onClick={handleLoginClick} className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>Login</button>
//                       <span>/</span>
//                       <button onClick={handleRegisterClick} className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>Register</button>
//                       <Modal
//                         isOpen={isLoginClicked || isRegisterClicked}
//                         onClose={closeDialog}
//                         content={
//                           <div className="modal-content-inner text-center">
//                             <p className="text-3xl mb-2 font-semibold text-center text-slate-900">{isLoginClicked ? 'Login' : 'Register'} as</p>
//                             <br />
//                             {/* Button for Customer */}
//                             <Link to={isLoginClicked ? "/login" : "/c-register"}>
//                               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
//                                   Customer
//                                 </button>
//                               </motion.div>
//                             </Link>
                        
//                             <br />
                        
//                             {/* Button for Worker */}
//                             <Link to={isLoginClicked ? "/login" : "/w-register"}>
//                               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300" onClick={closeDialog}>
//                                   Worker
//                                 </button>
//                               </motion.div>
//                             </Link>
                        
//                             <br />
//                             <br />
                        
//                             {/* Close button */}
//                             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
//                               <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
//                                 Close
//                               </button>
//                             </motion.div>
//                           </div>
//                         }
//                       />
//                     </div>
//                   </ul>
//                   <div className='text-center font-semibold mt-6'>
//                     <a href="/" className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>GO BACK</a>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//         <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.id} onClick={() => setActive(item.label)}>
//               <a href={`#${item.id}`} className="font-montserrat leading-normal text-lg text-white hover:text-gray-300">
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden pr-2'>
//           {isLoggedIn ? (
//             <>
//                 <button onClick={handleLogout} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                     Logout
//                 </button>
//                 {userRole === 'Customer' && (
//                     <Link to="/c-dashboard">
//                         <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                             Customer Dashboard
//                         </button>
//                     </Link>
//                 )}
//                 {userRole === 'Worker' && (
//                     <Link to="/w-dashboard">
//                         <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                             Worker Dashboard
//                         </button>
//                     </Link>
//                 )}
//                 {userRole === 'Admin' && (
//                     <Link to="/a-dashboard">
//                         <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                             Admin Dashboard
//                         </button>
//                     </Link>
//                 )}
//             </>
//           ) : (
//             <>
//               <button onClick={handleLoginClick} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                 Login
//               </button>
//               <button onClick={handleRegisterClick} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
//                 Register
//               </button>
//               <Modal
//                 isOpen={isLoginClicked || isRegisterClicked}
//                 onClose={closeDialog}
//                 content={
//                   <div className="modal-content-inner text-center">
//                     <p className="text-3xl mb-2 font-semibold text-center text-slate-900">{isLoginClicked ? 'Login' : 'Register'} as</p>
//                     <br />
//                     {/* Button for Customer */}
//                     <Link to={isLoginClicked ? "/login" : "/c-register"}>
//                       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                         <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300" >
//                           Customer
//                         </button>
//                       </motion.div>
//                     </Link>
                
//                     <br />
                
//                     {/* Button for Worker */}
//                     <Link to={isLoginClicked ? "/login" : "/w-register"}>
//                       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                         <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300" onClick={closeDialog} >
//                           Worker
//                         </button>
//                       </motion.div>
//                     </Link>
                
//                     <br />
//                     <br />
                
//                     {/* Close button */}
//                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
//                         Close
//                       </button>
//                     </motion.div>
//                   </div>
//                 }
//               />
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRegisterClicked, setRegisterClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [userRole, setUserRole] = useState(localStorage.getItem('userType') || ''); // Get userType from localStorage
  const [active, setActive] = useState('');

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleRegisterClick = () => {
    setRegisterClicked(!isRegisterClicked);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate directly to the login page
  };

  const closeDialog = () => {
    setRegisterClicked(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUserRole('');
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('userId'); // Remove userId if you stored it
  };

  return (
    <header className={`bg-gradient-to-r from-slate-950 to-slate-400 padding-x py-4 shadow-md fixed w-full top-0 z-10 ${scrolled ? 'scrolled' : ''}`}>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} alt="logo" width={129} height={29} className="m-0 w-[100px] h-[60px]"/>
        </a>
        <div className="hidden max-lg:block">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                Logout
              </button>
              {userRole === 'Customer' && (
                <Link to="/c-dashboard">
                  <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                    Customer Dashboard
                  </button>
                </Link>
              )}
              {userRole === 'Worker' && (
                <Link to="/w-dashboard">
                  <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                    Worker Dashboard
                  </button>
                </Link>
              )}
              {userRole === 'Admin' && (
                <Link to="/a-dashboard">
                  <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                    Admin Dashboard
                  </button>
                </Link>
              )}
            </>
          ) : (
            <>
              <img src={hamburger} alt="hamburger icon" width={25} height={25} onClick={toggleMenu} className="cursor-pointer"/>
              {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-slate-700 to-slate-500 z-20">
                  <ul className="flex flex-col items-center mt-24">
                    {navLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-white hover:text-gray-300 transition duration-300 transform hover:scale-105 hover:cursor-pointer" onClick={toggleMenu}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat mt-4">
                      <button onClick={handleLoginClick} className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>Login</button>
                      <span>/</span>
                      <button onClick={handleRegisterClick} className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>Register</button>
                      <Modal
                        isOpen={isRegisterClicked}
                        onClose={closeDialog}
                        content={
                          <div className="modal-content-inner text-center">
                            <p className="text-3xl mb-2 font-semibold text-center text-slate-900">Register as</p>
                            <br />
                            {/* Button for Customer */}
                            <Link to="/c-register">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                                  Customer
                                </button>
                              </motion.div>
                            </Link>
                        
                            <br />
                        
                            {/* Button for Worker */}
                            <Link to="/w-register">
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300" onClick={closeDialog}>
                                  Worker
                                </button>
                              </motion.div>
                            </Link>
                        
                            <br />
                            <br />
                        
                            {/* Close button */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                              <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                                Close
                              </button>
                            </motion.div>
                          </div>
                        }
                      />
                    </div>
                  </ul>
                  <div className='text-center font-semibold mt-6'>
                    <a href="/" className='hover:cursor-pointer text-white hover:text-gray-300 transition duration-300 transform hover:scale-105'>GO BACK</a>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => setActive(item.label)}>
              <a href={`#${item.id}`} className="font-montserrat leading-normal text-lg text-white hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden pr-2'>
          {isLoggedIn ? (
            <>
                <button onClick={handleLogout} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                    Logout
                </button>
                {userRole === 'Customer' && (
                    <Link to="/c-dashboard">
                        <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                            Customer Dashboard
                        </button>
                    </Link>
                )}
                {userRole === 'Worker' && (
                    <Link to="/w-dashboard">
                        <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                            Worker Dashboard
                        </button>
                    </Link>
                )}
                {userRole === 'Admin' && (
                    <Link to="/a-dashboard">
                        <button className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                            Admin Dashboard
                        </button>
                    </Link>
                )}
            </>
          ) : (
            <>
              <button onClick={handleLoginClick} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                Login
              </button>
              <button onClick={handleRegisterClick} className='hover:cursor-pointer text-white bg-transparent hover:bg-gray-700 border border-white hover:border-transparent py-2 px-4 rounded'>
                Register
              </button>
              <Modal
                isOpen={isRegisterClicked}
                onClose={closeDialog}
                content={
                  <div className="modal-content-inner text-center">
                    <p className="text-3xl mb-2 font-semibold text-center text-slate-900">Register as</p>
                    <br />
                    {/* Button for Customer */}
                    <Link to="/c-register">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
                          Customer
                        </button>
                      </motion.div>
                    </Link>
                
                    <br />
                
                    {/* Button for Worker */}
                    <Link to="/w-register">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300" onClick={closeDialog} >
                          Worker
                        </button>
                      </motion.div>
                    </Link>
                
                    <br />
                    <br />
                
                    {/* Close button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <button onClick={closeDialog} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                        Close
                      </button>
                    </motion.div>
                  </div>
                }
              />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;