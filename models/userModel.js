const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    d_name: String,
    d_plate: String,
    d_date: String,
    d_start_time: String,
    d_end_time: String,
    d_start_location: String,
    d_end_location: String,
    d_age: String,
    d_gender: String,
    d_count: String,
    d_pay: String,
    d_paymentAmount: String,
    vehicle_type: String,
    license_plate: String,
    availability: String,
    model: String,
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

