
const userModel = require('../models/userModel');

const query2Controller = async (req, res) => {
  try {
    const destinationName = req.query.d_end_location; // Change the query parameter to match your frontend input name

    const result = await userModel.aggregate([
      {
        $match: {
          d_end_location:destinationName,
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $toDouble: '$d_paymentAmount' } }, // Assuming 'd_paymentAmount' is a numeric field
        },
      },
      {
        $sort: { totalRevenue: -1 },
      },
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query2Controller };
