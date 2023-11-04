const userModel = require('../models/userModel');

const query3Controller = async (req, res) => {
  try {
    const result = await userModel.aggregate([
      {
        $addFields: {
          convertedDate: { $toDate: '$d_date' }, // Convert 'd_date' from string to Date
        },
      },
      {
        $project: {
          year: { $year: '$convertedDate' }, // Extract the year from the converted date
        },
      },
      {
        $group: {
          _id: '$year',
          totalPassengers: { $sum: 1 }, // Count the number of passengers
        },
      },
      {
        $sort: { _id: 1 }, // Sort by year in ascending order
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query3Controller };
