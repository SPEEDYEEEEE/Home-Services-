import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Admin } from '../models/userModel.js';
import * as dotenv from 'dotenv';

dotenv.config();

const createInitialAdmin = async () => {
  try {
    const MONGODB = process.env.MONGO_URI; 

    await mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

    const existingAdmin = await Admin.findOne({ userName: 'admin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin&123', 10);
      const admin = new Admin({
        userName: 'admin',
        password: hashedPassword
      });
      await admin.save();
      console.log('Initial admin user created');
    } else {
      console.log('Admin user already exists');
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error creating initial admin user:', error);
  }
};

createInitialAdmin();
