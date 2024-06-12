import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterHero, Requirements, WhyUs } from '../sections';
import WorkWithUs from '../sections/WorkWithUs';
import { countryCities } from '../constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader'; // Import the Loader component

const WorkerRegister = () => {

    const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm();
    const [cnicValue, setCNICValue] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);  
    const navigate = useNavigate();
    const [skillLevels, setSkillLevels] = useState({});
    const [skillExperiences, setSkillExperiences] = useState({});
    const [registerError, setRegisterError] = useState('');
    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    const [loading, setLoading] = useState(true);

    // Getting user location 
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
            setCoordinates({latitude:position.coords.latitude, longitude:position.coords.longitude});
              },
              (error) => {
                console.error('Error getting the location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
          
    }, []);    

    const WorkerSubmitForm = (formData, coordinates) => {
        console.log(formData)
        console.log(coordinates)
        // Destructure coordinates into latitude and longitude
        const { latitude, longitude } = coordinates;
        axios.post('http://localhost:3000/api/users/w-register', {
        ...formData,
        location: {
            latitude,
            longitude
        }
        })
         .then(response => {
            // Handle successful submission
            console.log('Form submitted successfully!', response.data);
            
            toast.success('Registration successful');
            navigate('/login');
            // Optionally, you can navigate to a success page or perform any other action
        })
        .catch(error => {
                // Handle errors
                if (error.response) {
                    // The request was made and the server responded with a status code that falls out of the range of 2xx
                    console.error('Server responded with error:', error.response.data);
                    setRegisterError(error.response.data.message);
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received from server:', error.request);
                    setRegisterError(error.response.data.message);
                    toast.error('No response received from server');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error while setting up the request:', error.message);
                    setRegisterError(error.response.data.message);
                    toast.error('An error occurred while processing your request');
                }
                // Optionally, you can display error messages to the user or perform any other action
        })
    };
 
    const onSubmit = () => {
        const formData = watch(); // Get form data using watch()
        
        // Add skill levels and experiences to formData
        formData.skills = skills
        .filter(skill => formData[skill.name]) // Check if the skill is selected
        .map(skill => ({
            name: skill.name,
            level: skillLevels[skill.name] || '', // Set level if available, otherwise set empty string
            experience: skillExperiences[skill.name] || null // Set experience if available, otherwise set null
        }));

        console.log('Form Data before submission:', formData); // Log form data before submission
        console.log('coordinates', coordinates);

        WorkerSubmitForm(formData, coordinates);
    };
    
    // Custom validation for first name and last name
    const nameRegex = /^[A-Z][a-z]*$/;
    register('firstName', { 
        required: 'First Name is required',
        pattern: { 
            value: nameRegex, 
            message: 'First Name must start with a capital letter and contain only letters'
        }
    });
    register('lastName', { 
        required: 'Last Name is required',
        pattern: { 
            value: nameRegex, 
            message: 'Last Name must start with a capital letter and contain only letters'
        }
    });

    // Custom validation for father name
    const fatherNameRegex = /^[A-Z][a-zA-Z\s]*$/;
    register('fatherName', { 
        pattern: { 
            value: fatherNameRegex, 
            message: 'Father Name must start with a capital letter and contain only letters'
        }
    });

    // Custom validation for CNIC
    const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
    register('cnic', { 
        required: 'CNIC is required',
        pattern: { 
            value: cnicRegex, 
            message: 'CNIC must be in the format XXXXX-XXXXXXX-X'
        }
    });

    // Custom validation for phone number
    const phoneNoRegex = /^\d+$/;
    register('phoneNo', { 
        required: 'Phone No. is required',
        pattern: { 
            value: phoneNoRegex, 
            message: 'Phone No. must contain only numbers'
        }
    });

    const handleCNICChange = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, ''); // Remove any non-numeric characters
        // Add hyphens automatically
        if (value.length > 5 && value.length <= 12) {
            value = value.slice(0, 5) + '-' + value.slice(5, 12) + '-' + value.slice(12);
        } else if (value.length > 12) {
            value = value.slice(0, 5) + '-' + value.slice(5, 12) + '-' + value.slice(12, 13);
        }
        // Update the state and set the value for the CNIC field
        setCNICValue(value);
        setValue('cnic', value); // Update the value of 'cnic' field
    };

    // Define the country codes with their corresponding digit lengths
    const countryCodes = [
        { name: 'United States', code: '+1', digitLength: 10 },
        { name: 'United Kingdom', code: '+44', digitLength: 11 },
        { name: 'Australia', code: '+61', digitLength: 9 },
        { name: 'Pakistan', code: '+92', digitLength: 10}
        // Add more country codes as needed
    ];

    const handleChangeCountryCode = (e) => {
        const selectedCountry = countryCodes.find(country => country.code === e.target.value);
        const phoneNoInput = document.getElementById('phoneNo');
        phoneNoInput.setAttribute('maxlength', selectedCountry.digitLength);
    };

    const handlePhoneNoInputChange = (e) => {
        e.target.value = e.target.value.replace(/\D/, ''); // Remove non-digit characters
    };

    // Function to handle country selection change
    const handleCountryChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setCities(countryCities[country] || []);
    };

    const [skills, setSkills] = useState([
        { name: 'Cleaning Services', level: '', experience: '' },
        { name: 'Auto-Mobile Services', level: '', experience: '' },
        { name: 'Health-Care Services', level: '', experience: '' },
        { name: 'Electrician Services', level: '', experience: '' },
        { name: 'Plumber Services', level: '', experience: '' },
        { name: 'Carpenter Services', level: '', experience: '' },
        { name: 'Home Security Services', level: '', experience: '' },
        { name: 'Gardening Services', level: '', experience: '' }
    ]);

    // Update the handleChange functions for skill level and experience
    const handleSkillLevelChange = (skillName, value) => {
        setSkillLevels(prevState => ({
            ...prevState,
            [skillName]: value
        }));
    };

    const handleExperienceChange = (skillName, value) => {
        setSkillExperiences(prevState => ({
            ...prevState,
            [skillName]: value
        }));
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
        <>
            <section>
                <RegisterHero />
            </section>

            <section>
                <WorkWithUs />
            </section>

            <section>
                <Requirements />
            </section>

            <section>
                <div className="px-4 md:px-8 bg-gradient-to-b from-slate-200 to-slate-100 text-white-400">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-700 font-montserrat">Registration Form</h2>
                    <form className='py-8' onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Grid 1: Personal Info and Address */}
                            <div className='space-y-4'>
                            <h3 className="text-lg font-semibold mb-2 text-gray-700 font-montserrat">Personal Information</h3>
                                <input
                                    type="text"
                                    {...register('firstName')}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    placeholder="First Name"
                                />
                                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                                <input
                                    type="text"
                                    {...register('lastName')}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    placeholder="Last Name"
                                />
                                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                                <input
                                    type="text"
                                    {...register('fatherName')}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    placeholder="Father Name"
                                />
                                {errors.fatherName && <span className="text-red-500">{errors.fatherName.message}</span>}
                                <div className='flex space-x-2'>
                                    <input
                                        type="text"
                                        value={cnicValue}
                                        onChange={handleCNICChange}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        placeholder="CNIC ( XXXXX-XXXXXXX-X )"
                                    />
                                    {errors.cnic && <span className="text-red-500">{errors.cnic.message}</span>}
                                    <select
                                        name="gender"
                                        id="gender"
                                        {...register('gender', { required: 'Gender is required' })}
                                        className="px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                    >
                                        <option value="" disabled selected>Select gender</option>
                                        <option value="Male" className='text-gray-700 font-montserrat'>Male</option>
                                        <option value="Female" className='text-gray-700 font-montserrat'>Female</option>
                                    </select>
                                </div>
                                <div className="flex space-x-2">
                                    <select
                                        {...register('countryCode', { required: true })}
                                        className="px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        onChange={handleChangeCountryCode}
                                    >
                                        <option value="" className='text-gray-700 font-montserrat'>Country Code</option>
                                        {countryCodes.map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.name} ({country.code})
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        id="phoneNo"
                                        {...register('phoneNo', { required: 'Phone No. is required' })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        placeholder="Phone No."
                                        onChange={handlePhoneNoInputChange}
                                        disabled={isSubmitting}
                                    />
                                    </div>
                                    {errors.phoneNo && <span className="text-red-500">{errors.phoneNo.message}</span>}

                                    <h3 className="text-lg font-semibold mb-4 mt-6 text-gray-700 font-montserrat">Address</h3>
                                    <select
                                        {...register('country', { required: 'Country is required' })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        onChange={handleCountryChange}
                                    >
                                        <option value="" className='text-gray-700 font-montserrat'>Select Country</option>
                                        {Object.keys(countryCities).map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                    {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                                        
                                    <select
                                        {...register('city', { required: 'City is required' })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                    >
                                        <option value="" className='text-gray-700 font-montserrat'>Select City</option>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                                    <input
                                        type="text"
                                        {...register('town', { 
                                            required: 'Town is required',
                                            pattern: {
                                                value: /^[a-zA-Z\s]*$/,
                                                message: 'Invalid town name, please use only letters and spaces'
                                            } 
                                        })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        placeholder="Town"
                                    />
                                    {errors.town && <span className="text-red-500">{errors.town.message}</span>}
                                    
                                    <input
                                        type="text"
                                        {...register('homeAddress', { required: 'Shop Address is required' })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                        placeholder="Shop Address"
                                    />
                                    {errors.homeAddress && <span className="text-red-500">{errors.homeAddress.message}</span>}
                                </div>

                            {/* Grid 2: Credentials and Job */}
                            <div className='space-y-4'>
                            <h3 className="text-lg font-semibold mb-2 text-gray-700 font-montserrat">Credentials</h3>
                                <input
                                    type="text"
                                    {...register('userName', { pattern: /^[A-Za-z]+$/i })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                    placeholder="User Name"
                                />
                                {errors.userName && <span className="text-red-500">User Name can only contain letters</span>}

                                <input
                                    type="email"
                                    {...register('email', { 
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                    placeholder="Email"
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                <input
                                    type="password"
                                    {...register('password', { 
                                        required: 'Password is required',
                                        minLength: {
                                            value: 4,
                                            message: 'Password must be at least 4 characters long'
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: 'Password cannot exceed 10 characters'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,10}$/,
                                            message: 'Password must contain at least one letter, one number, and one special character'
                                        }
                                    })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-700"
                                    placeholder="Password"
                                    // maxlength="10"
                                />
                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                                {/* Skills Section */}
                                <div className='space-y-2 ml-0 md:ml-48'> {/* Adjust ml (margin-left) value as needed */}
                                    <h3 className="text-lg font-semibold mb-2 text-gray-700 font-montserrat">Skills</h3>
                                    {skills.map((skill, index) => (
                                        <div key={index} className="flex items-center mb-4">
                                            <input
                                                type="checkbox"
                                                id={skill.name}
                                                value={skill.name}
                                                {...register(
                                                    
                                                    skill.name
                                                )}
                                                className="mr-2 rounded-full border-gray-300"
                                            />
                                            <label htmlFor={skill.name} className="mr-4 font-bold text-gray-500">{skill.name}</label>
                                            <div className="flex flex-col">
                                                <select
                                                    value={skillLevels[skill.name] || 'name'}
                                                    onChange={(e) => handleSkillLevelChange(skill.name, e.target.value)}
                                                    className="border rounded-md p-1 mr-4 text-black"
                                                >
                                                    <option value="" className='text-gray-700 font-montserrat'>Select Skill Level</option>
                                                    <option value="Basic" className='text-gray-700 font-montserrat'>Basic</option>
                                                    <option value="Advanced" className='text-gray-700 font-montserrat'>Advanced</option>
                                                    <option value="Professional" className='text-gray-700 font-montserrat'>Professional</option>
                                                </select>
                                            </div>
                                            <div className="flex flex-col">
                                                <select
                                                    value={skillExperiences[skill.name] || 'experience'}
                                                    onChange={(e) => handleExperienceChange(skill.name, e.target.value)}
                                                    className="border rounded-md p-1 px-3 text-black"
                                                >
                                                    <option value="" className='text-gray-700 font-montserrat'>Select Experience</option>
                                                    {[...Array(100)].map((_, index) => (
                                                        <option key={index} value={index + 1}>{index + 1} year{index !== 0 ? 's' : ''}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {registerError && <span className="text-red-500">{registerError}</span>}
                        <div className="flex justify-center">
                            <button type="submit" className="w-72 bg-gradient-to-br from-slate-900 to-slate-500 text-white font-semibold py-2 px-3 md:px-4 rounded focus:outline-none focus:bg-blue-600 mt-4 md:mt-8 transition duration-300 ease-in-out transform hover:scale-105">
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </button>
                        </div>

                    </form>
                </div>
            </section>

            <ToastContainer />
        </>
    );
};

const CustomerRegister = () => {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
    const [loading, setLoading] = useState(true);

    // Getting user location 
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
            setCoordinates({latitude:position.coords.latitude, longitude:position.coords.longitude});
              },
              (error) => {
                console.error('Error getting the location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
          
    }, []); 

    const CustomerSubmitForm = (formData) => {
        console.log(formData)
        axios.post('http://localhost:3000/api/users/c-register', {...formData, location:coordinates})
            .then(response => {
                // Handle successful submission
                console.log('Form submitted successfully!', response.data);
                toast.success('Registration successful');
                navigate('/login');
                // Optionally, you can navigate to a success page or perform any other action
            })
            .catch(error => {
                // Handle errors
                if (error.response) {
                    // The request was made and the server responded with a status code that falls out of the range of 2xx
                    console.error('Server responded with error:', error.response.data);
                    setRegisterError(error.response.data.message);
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received from server:', error.request);
                    setRegisterError(error.response.data.message);
                    toast.error('No response received from server');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error while setting up the request:', error.message);
                    setRegisterError(error.response.data.message);
                    toast.error('An error occurred while processing your request');
                }
                // Optionally, you can display error messages to the user or perform any other action
            });
    };
 
    const onSubmit = () => {
        
        const formData = watch(); // Get form data using watch()

        CustomerSubmitForm(formData, coordinates);
    };

    // Custom validation for first name and last name
    const nameRegex = /^[A-Z][a-z]*$/;
    register('firstName', { 
        required: 'First Name is required',
        pattern: { 
            value: nameRegex, 
            message: 'First Name must start with a capital letter and contain only letters'
        }
    });
    register('lastName', { 
        required: 'Last Name is required',
        pattern: { 
            value: nameRegex, 
            message: 'Last Name must start with a capital letter and contain only letters'
        }
    });

    // Custom validation for phone number
    const phoneNoRegex = /^\d+$/;
    register('phoneNo', { 
        required: 'Phone No. is required',
        pattern: { 
            value: phoneNoRegex, 
            message: 'Phone No. must contain only numbers'
        }
    });

    // Define the country codes with their corresponding digit lengths
    const countryCodes = [
        { name: 'United States', code: '+1', digitLength: 10 },
        { name: 'United Kingdom', code: '+44', digitLength: 11 },
        { name: 'Australia', code: '+61', digitLength: 9 },
        { name: 'Pakistan', code: '+92', digitLength: 10}
        // Add more country codes as needed
    ];

    const handleChangeCountryCode = (e) => {
        const selectedCountry = countryCodes.find(country => country.code === e.target.value);
        const phoneNoInput = document.getElementById('phoneNo');
        phoneNoInput.setAttribute('maxlength', selectedCountry.digitLength);
    };

    const handlePhoneNoInputChange = (e) => {
        e.target.value = e.target.value.replace(/\D/, ''); // Remove non-digit characters
    };

    // Function to handle country selection change
    const handleCountryChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setCities(countryCities[country] || []);
    };

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
              console.log( position.coords.latitude);
                console.log( position.coords.longitude);

              },
              (error) => {
                console.error('Error getting the location:', error);
              }
            );
          } else {
            console.error('Geolocation is not supported by this browser.');
          }
          
    }, []);

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
    <>
        <section>
            <RegisterHero />
        </section>

        <section>
          <WhyUs />
        </section>

        <section>
            <div className="px-4 md:px-8 bg-gradient-to-b from-slate-500 to-slate-400 text-white-400">
                <h2 className="text-3xl font-bold text-center mb-2 text-white-400 font-montserrat">Registration Form</h2>
                <form className='py-8 space-y-4 mx-auto max-w-lg' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-lg font-semibold mb-2 text-white-400 font-montserrat">Personal Information</h3>
                            <input
                                type="text"
                                {...register('firstName')}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                placeholder="First Name"
                            />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                            <input
                                type="text"
                                {...register('lastName')}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                placeholder="Last Name"
                            />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}              
                                <div className='flex space-x-4'>
                                    <select
                                        {...register('countryCode', { required: true })}
                                        className="px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                        onChange={handleChangeCountryCode}
                                    >
                                        <option value="" className='font-montserrat'>Country Code</option>
                                        {countryCodes.map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.name} ({country.code})
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        id="phoneNo"
                                        {...register('phoneNo', { required: 'Phone No. is required' })}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                        placeholder="Phone No."
                                        onChange={handlePhoneNoInputChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                               
                                {errors.phoneNo && <span className="text-red-500">{errors.phoneNo.message}</span>}
                                <h3 className="text-lg font-semibold mb-4 mt-6 text-white-400 font-montserrat">Address</h3>
                                <select
                                    {...register('country', { required: 'Country is required' })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    onChange={handleCountryChange}
                                >
                                    <option value="" className='font-montserrat'>Select Country</option>
                                    {Object.keys(countryCities).map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                                {errors.country && <span className="text-red-500">{errors.country.message}</span>}
                                    
                                <select
                                    {...register('city', { required: 'City is required' })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                >
                                    <option value="" className='font-montserrat'>Select City</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                                </select>
                                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                                <input
                                    type="text"
                                    {...register('town', { 
                                        required: 'Town is required',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/,
                                            message: 'Invalid town name, please use only letters and spaces'
                                        } 
                                    })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    placeholder="Town"
                                />
                                {errors.town && <span className="text-red-500">{errors.town.message}</span>}
                                
                                <input
                                    type="text"
                                    {...register('homeAddress', { required: 'Address is required' })}
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                    placeholder="Address"
                                />
                                {errors.homeAddress && <span className="text-red-500">{errors.homeAddress.message}</span>}
                            
                        <h3 className="text-lg font-semibold mb-4 mt-6 text-white-400 font-montserrat">Credentials</h3>
                            <input
                                type="text"
                                {...register('userName', { pattern: /^[A-Za-z]+$/i })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                placeholder="User Name"
                            />
                            {errors.userName && <span className="text-red-500">User Name can only contain letters</span>}
                            <input
                                type="email"
                                {...register('email', { 
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                placeholder="Email"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            <input
                                type="password"
                                {...register('password', { 
                                    required: 'Password is required',
                                    minLength: {
                                        value: 4,
                                        message: 'Password must be at least 4 characters long'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Password cannot exceed 10 characters'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,10}$/,
                                        message: 'Password must contain at least one letter, one number, and one special character'
                                    }
                                })}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-teal-900 bg-white text-gray-900"
                                placeholder="Password"
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        
                    
                    <div className="flex justify-center">
                        <button type="submit" className="w-72 bg-gradient-to-br from-slate-900 to-slate-500 text-white font-semibold py-2 px-3 md:px-4 rounded focus:outline-none focus:bg-blue-600 mt-4 md:mt-8 transition duration-300 ease-in-out transform hover:scale-105 font-montserrat">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export {WorkerRegister, CustomerRegister}
