const mongoose = require("mongoose");
const URI = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection errror");
    process.exit(0);
  }
};

module.exports = connectDb;
