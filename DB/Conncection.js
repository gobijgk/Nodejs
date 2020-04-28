const mongoose = require('mongoose');

const URI ="mongodb+srv://gobijgk:65elVGOtF1iI48N1@cluster0-jssnm.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
