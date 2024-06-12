import mongoose,{Types} from 'mongoose';

// Define schema for services
const serviceSchema = new mongoose.Schema({
    image: String,
    name: String,
    details: String,
    image: String,
    link: String,
    subServices:[
        {
            type:Types.ObjectId,
            ref:"SubService"
        }
    ]
  });
  
  // Create model from schema
  const Service = mongoose.model('Service', serviceSchema);
  
 export {Service}