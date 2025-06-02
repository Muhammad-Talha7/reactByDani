import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
