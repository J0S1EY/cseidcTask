const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cseidc');

mongoose.connection.on('connected', () => {
    console.log('Connected to cseidc');
});

mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to cseidc:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from cseidc');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Disconnected from cseidc due to application termination');
        process.exit(0);
    });
});

const Users = mongoose.model('Users', {
    userName: String,
    email: String,
    number: Number,
    designation: String,
    place:String

})

module.exports = {
    Users
}