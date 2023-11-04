const userModel = require('../models/userModel');

const vehicle1Controller = async (req, res) => {
  try {
    const result = await userModel.aggregate([
      {
        $match: {
          availability: "yes",
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id
          license_plate: 1, // Include the 'license_plate' field
          vehicle_type: 1, // Include the 'vehicle_type' field
          model: 1, // Include the 'model' field
          availability: 1, // Include the 'availability' field
        },
      },
    ]);

    if (result.length === 0) {
      res.status(404).json({ success: false, message: 'No matching vehicles found' });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { vehicle1Controller };
