import { Service } from "../models/servicesModel.js";
import { SubService } from "../models/subServicesModel.js";

// Controller function to save services data to the database
export const saveServicesToDB = async (req, res) => {
  const servicesData = req.body;
  try {
    // Loop through the array of services data and save each service to the database
    for (const serviceData of servicesData) {
      // Create a new Service instance using the Mongoose model
      const service = new Service({
        name: serviceData.name,
        details: serviceData.details,
        link: serviceData.link
      });

      // Save the service to the database
      await service.save();
      console.log(`Service "${service.name}" saved to database`);

      // Save sub-services for this service
      for (const subServiceData of serviceData.subService) {
        // Create a new SubService instance using the Mongoose model
        const subService = new SubService({
          name: subServiceData.name,
          description: subServiceData.description,
          image: subServiceData.image,
          type: subServiceData.type
        });

        // Save the sub-service to the database
        await subService.save();
        console.log(`SubService "${subService.name}" saved to database`);

        // Update the Service document with the ID of the newly saved subService
        await Service.findByIdAndUpdate(service._id, {
          $push: { subServices: subService._id }
        });
        console.log(`SubService "${subService.name}" linked to Service "${service.name}"`);
      }
    }

    // Respond with success message
    res.status(201).json({ message: 'Services data saved to database successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error saving services data to database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//fetching services
export const getServicesData = async (req, res) => {
  const services = await Service.find().populate("subServices");
  res.status(200).json(services);
}