const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/PROTAXI5")
        console.log('Mongodb connected'.bgGreen.white);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;