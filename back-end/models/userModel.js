import mongoose from 'mongoose';

const workerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format'] // Adjust regex as needed
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  homeAddress: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    match: [/^[A-Za-z]+$/, 'User Name can only contain letters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email address']
  },
  password: {
    type: String,
    required: true,
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Basic', 'Advanced', 'Professional'],
      required: true
    },
    experience: {
      type: Number,
      required: true
    }
  }],
  location: {
    latitude: {
      type: Number,
      default: 0,
      required: true
    }, 
    
    longitude: {
      type: Number,
      default: 0,
      required: true
    }
  }
});
const Worker = mongoose.model('Worker', workerSchema);

const customerSchema = new mongoose.Schema({
  firstName: {
      type: String,
      required: true,
      validate: {
          validator: function(v) {
              return /^[A-Z][a-z]*$/.test(v);
          },
          message: props => `${props.value} is not a valid first name. First Name must start with a capital letter and contain only letters.`
      }
  },
  lastName: {
      type: String,
      required: true,
      validate: {
          validator: function(v) {
              return /^[A-Z][a-z]*$/.test(v);
          },
          message: props => `${props.value} is not a valid last name. Last Name must start with a capital letter and contain only letters.`
      }
  },
  countryCode: {
      type: String,
      required: true
  },
  phoneNo: {
      type: String,
      required: true,
      validate: {
          validator: function(v) {
              return /^\d+$/.test(v);
          },
          message: props => `${props.value} is not a valid phone number. Phone number must contain only numbers.`
      }
  },
  country: {
      type: String,
      required: true
  },
  city: {
      type: String,
      required: true
  },
  town: {
      type: String,
      required: true,
      validate: {
          validator: function(v) {
              return /^[a-zA-Z\s]*$/.test(v);
          },
          message: props => `${props.value} is not a valid town name. Please use only letters and spaces.`
      }
  },
  homeAddress: {
      type: String,
      required: true
  },
  userName: {
      type: String,
      validate: {
          validator: function(v) {
              return /^[A-Za-z]+$/.test(v);
          },
          message: props => `${props.value} is not a valid user name. User name can only contain letters.`
      }
  },
  email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator: function(v) {
              return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
          },
          message: props => `${props.value} is not a valid email address.`
      }
  },
  password: {
      type: String,
      required: true,
  },
  location: {
    latitude: {
      type: Number,
      default: 0,
      required: true
    }, 
    
    longitude: {
      type: Number,
      default: 0,
      required: true
    }
  }
});
const Customer = mongoose.model('Customer', customerSchema);

const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    default: 'admin'
  },
  password: {
    type: String,
    required: true,
    default: 'admin&123'
  }
});

AdminSchema.set('toObject', { virtuals: true });
AdminSchema.set('toJSON', { virtuals: true });

const Admin = mongoose.model('Admin', AdminSchema);

export {Worker, Customer, Admin };

