const userModel = require('../models/userModel');

// Controller for user registration
const registerController = async (req, res) => {
  try {
    // Create a new user object with the required fields
    const newUser = new userModel({
      d_name: req.body.d_name,
      d_plate: req.body.d_plate,
      d_date: req.body.d_date,
      d_start_time: req.body.d_start_time,
      d_end_time: req.body.d_end_time,
      d_start_location: req.body.d_start_location[0],
      d_end_location: req.body.d_end_location[0],
      d_gender: req.body.d_gender[0],
      d_age: req.body.d_age,
      d_count: req.body.d_count,
      d_pay: req.body.d_pay[0],
      d_paymentAmount: req.body.d_paymentAmount,
    });

    // Attempt to save the document
    await newUser.save();
    res.status(201).send({
      message: 'Registered Successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in registerController:', error);
    res.status(500).send({
      success: false,
      message: 'Register controller',
    });
  }
};

module.exports = { registerController };
