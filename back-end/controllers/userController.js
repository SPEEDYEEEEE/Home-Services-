import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Worker, Customer, Admin } from '../models/userModel.js';
import * as dotenv from 'dotenv';
import { servicesData } from '../constants/index.js';
 
dotenv.config();

// Controller function to register a worker
export const registerWorker = async (req, res) => {
    try {
        // Extract worker data from request body
        const {
            firstName,
            lastName,
            fatherName,
            cnic,
            gender,
            countryCode,
            phoneNo,
            country,
            city,
            town,
            homeAddress,
            userName,
            email,
            password,
            skills,
            location
        } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Map skills to include the service link
        const skillsWithLinks = skills.map(skill => ({
            ...skill,
            link: servicesData.find(service => service.name.toLowerCase() === skill.name.toLowerCase())?.link // Find the corresponding service link
        }));
        
        console.log('Skills with links:', skillsWithLinks); // Log skills with links

        // Create a new worker instance
        const newWorker = new Worker({
            firstName,
            lastName,
            fatherName,
            cnic,
            gender,
            countryCode,
            phoneNo,
            country,
            city,
            town,
            homeAddress,
            userName,
            email,
            password: hashedPassword, // Store hashed password
            skills: skillsWithLinks,
            location // Include skills with links
        });

        console.log(newWorker);

        // Save the worker to the database
        await newWorker.save();

        // Generate JWT token
        const token = jwt.sign({ email: newWorker.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Respond with token
        res.status(201).json({ message: 'Worker registered successfully', token });
    } catch (error) {
        // Handle errors
        console.error('Error registering worker:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to register a customer
export const registerCustomer = async (req, res) => {
    try {
        // Extract worker data from request body
        const {
            firstName,
            lastName,
            countryCode,
            phoneNo,
            country,
            city,
            town,
            homeAddress,
            userName,
            email,
            password,
            location
        } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new worker instance
        const newCustomer = new Customer({
            firstName,
            lastName,
            countryCode,
            phoneNo,
            country,
            city, 
            town,
            homeAddress,
            userName,
            email,
            password: hashedPassword, // Store hashed password
            location 
        });

        console.log(newCustomer)
        // Save the worker to the database
        await newCustomer.save();

        // Generate JWT token
        const token = jwt.sign({ email: newCustomer.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Respond with token
        res.status(201).json({ message: 'Customer registered successfully', token });
    } catch (error) {
        // Handle errors
        console.error('Error registering customer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Common login function for all users
export const login = async (req, res) => {
    try {
        // Extract username and password from request body
        const { userName, password } = req.body;

        // Check if credentials belong to a Worker
        const worker = await Worker.findOne({ userName });
        if (worker) {
            const isPasswordValid = await bcrypt.compare(password, worker.password);
            if (isPasswordValid) {
                const token = jwt.sign({ id: worker._id, userType: 'Worker' }, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({ 
                    message: 'Worker login successful', 
                    token,
                    //Personal Info
                    firstName: worker.firstName, 
                    lastName: worker.lastName,
                    fatherName: worker.fatherName, 
                    cnic: worker.cnic,
                    gender: worker.gender,
                    countryCode: worker.countryCode,
                    phoneNo: worker.phoneNo,
                    //Address
                    country: worker.country,
                    city: worker.city,
                    town: worker.town,
                    homeAddress: worker.homeAddress,
                    //Credentials
                    userName: worker.userName, 
                    email: worker.email,
                    //Skills
                    skills: worker.skills,
                    //Location
                    location: worker.location
                });
            }
        }

        // Check if credentials belong to a Customer
        const customer = await Customer.findOne({ userName });
        if (customer) {
            const isPasswordValid = await bcrypt.compare(password, customer.password);
            if (isPasswordValid) {
                const token = jwt.sign({ id: customer._id, userType: 'Customer' }, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({ 
                    message: 'Customer login successful', 
                    token, 
                    //Personal Info
                    firstName: customer.firstName, 
                    lastName: customer.lastName,
                    countryCode: customer.countryCode,
                    phoneNo: customer.phoneNo,
                    //Address
                    country: customer.country,
                    city: customer.city,
                    town: customer.town,
                    homeAddress: customer.homeAddress,
                    //Credentials
                    userName: customer.userName, 
                    email: customer.email,
                    //Location
                    location: customer.location
                });
            }
        }

        // Check if credentials belong to an Admin
        const admin = await Admin.findOne({ userName });
        if (admin) {
            const isPasswordValid = await bcrypt.compare(password, admin.password);
            if (isPasswordValid) {
                const token = jwt.sign({ id: admin._id, userType: 'Admin' }, process.env.SECRET_KEY, { expiresIn: '1h' });
                return res.status(200).json({ 
                    message: 'Admin login successful', 
                    token,
                     //Credentials
                    userName: admin.userName, 
                    // email: admin.email,
                });
            }
        }

        // If none of the users match with provided credentials
        return res.status(401).json({ message: 'Invalid username or password' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to fetch all workers based on the provided service name
export const workerList = async (req, res) => {
    console.log(req.body)
    try {
        // Fetch all workers
        const workers = await Worker.find();
        console.log("Body", req.body)
        const newWorkers = workers.filter(worker =>
            worker.skills.some(skill => skill.name === req.body.name)
          );
          
         
        res.json(newWorkers);
    } catch (error) {
        console.error('Error fetching workers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
