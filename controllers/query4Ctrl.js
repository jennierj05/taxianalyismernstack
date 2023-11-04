const userModel = require('../models/userModel');

const query4Controller = async (req, res) => {
  const { startDate, endDate, d_end_location } = req.query;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();

  try {
    const result = await userModel.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $gte: [{ $year: { $toDate: '$d_date' } }, startYear] },
              { $lte: [{ $year: { $toDate: '$d_date' } }, endYear] },
              { $eq: ['$d_end_location', d_end_location] },
            ],
          },
        },
      },
      {
        $group: {
          _id: '$d_end_location', // Group by destination
          count: { $sum: 1 }, // Count the number of bookings for each destination
        },
      },
      {
        $sort: { count: -1 }, // Sort in descending order by count
      },
      {
        $project: {
          startYear: startYear, // Project the startYear
          endYear: endYear, // Project the endYear
          d_end_location: '$_id', // Project the destination
          count: 1, // Project the count
          _id: 0 // Exclude the default _id field
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { query4Controller };
