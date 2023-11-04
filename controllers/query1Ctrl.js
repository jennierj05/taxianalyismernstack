const userModel = require('../models/userModel');

const query1Controller = async (req, res) => {
    try {
        const d_start_location = req.query.d_start_location;
        const d_end_location = req.query.d_end_location;

        const result = await userModel.aggregate([
            {
                $match: {
                    d_start_location,  // Match the start location
                    d_end_location,    // Match the end location
                }
            },
            {
                $project: {
                    _id: 0,
                    d_name: 1  // Include the 'd_name' field in the result
                }
            }
        ]);

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching data' });
    }
};

module.exports = { query1Controller };

