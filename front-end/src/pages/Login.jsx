import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { RegisterHero } from '../sections';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecondaryFooter from '../components/SecondaryFooter';
import Loader from '../components/Loader'; // Import the Loader component
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a data fetching process
      setTimeout(() => {
        setLoading(false);
      }, 4000); // Loader will be displayed for 5 seconds
    }, []);
  
    if (loading) {
      return <Loader />; // Render the Loader component while loading
    }

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/users/u-login', data);
            const token = response.data.token; // Extract token from response
            const { 
                //Personal Info
                firstName, 
                lastName,
                fatherName, 
                cnic,
                gender,
                countryCode,
                phoneNo,
                //Address
                country,
                city,
                town,
                homeAddress,
                //Credentials
                userName, 
                email,
                //Skills
                skills,
                //Location
                location
            } = response.data;

            // console.log(token); // Log token for debugging
    
            // Decode the token to get user details
            const decodedToken = jwtDecode(token);
            const { userType, id } = decodedToken; // Extract userType and id from the token
    
            // console.log(
            //     userType,
            //     //Personal Info
            //     firstName, 
            //     lastName,
            //     fatherName, 
            //     cnic,
            //     gender,
            //     countryCode,
            //     phoneNo,
            //     //Address
            //     country,
            //     city,
            //     town,
            //     homeAddress,
            //     //Credentials
            //     userName, 
            //     email,
            //     //Skills
            //     skills,
            //     //Location
            //     location
            // );

            // Save token and userType to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('userType', userType);
            localStorage.setItem('userId', id); // If you need the user ID
            //Personal Info
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('fatherName', fatherName);
            localStorage.setItem('cnic', cnic);
            localStorage.setItem('gender', gender);
            localStorage.setItem('countryCode', countryCode);
            localStorage.setItem('phoneNo', phoneNo);
            //Address
            localStorage.setItem('country', country);
            localStorage.setItem('city', city);
            localStorage.setItem('town', town);
            localStorage.setItem('homeAddress', homeAddress);
            //Credentials
            localStorage.setItem('userName', userName);
            localStorage.setItem('email', email);
            //Skills
            localStorage.setItem('skills', JSON.stringify(skills)); // Save skills to local storage as a JSON string
            //Location
            localStorage.setItem('location', JSON.stringify(location))

            toast.success('Login successful'); // Display success toast
            
            navigate('/');
        } catch (error) {
            if (error.response) {
                setLoginError(error.response.data.message);
                toast.error(error.response.data.message); // Display error toast
            } else {
                setLoginError('An error occurred. Please try again.');
                toast.error('An error occurred. Please try again.'); // Display generic error toast
            }
        }
    };

    return (
        <>
            <Header/>
            <section>
                <RegisterHero />
            </section>

            <section className="flex justify-center items-center min-h-screen">
                <div className="bg-gradient-to-b from-slate-200 to-slate-100 text-white-400 rounded-lg p-8 shadow-lg">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gray-700 font-montserrat pt-10">Login</h2>
                    <form className='py-8' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-lg font-semibold mb-2 text-gray-700 font-montserrat">Credentials</h3>
                        <input type="text" {...register('userName', { pattern: /^[A-Za-z]+$/i })} className="w-full px-4 py-3 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700 mb-4" placeholder="User Name" />
                        {errors.userName && <span className="text-red-500">User Name can only contain letters</span>}
                        <input type="password" {...register('password', { required: 'Password is required' })} className="w-full px-4 py-3 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700 mb-4" placeholder="Password" />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        {loginError && <span className="text-red-500">{loginError}</span>}
                        <div className="flex justify-center">
                            <button type="submit" className="w-72 bg-gradient-to-br from-slate-900 to-slate-500 text-white font-semibold py-2 px-3 md:px-4 rounded focus:outline-none focus:bg-blue-600 mt-4 md:mt-8 transition duration-300 ease-in-out transform hover:scale-105" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <ToastContainer /> {/* Toast container */}
            <Footer/>
            <SecondaryFooter/>
        </>
    );
};

export default Login;
