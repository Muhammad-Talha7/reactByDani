const express = require("express"); // Import express framework to create server
const mongoose = require("mongoose"); // Import mongoose to connect with MongoDB
const cors = require("cors"); // Import CORS to allow frontend (React) to access backend

const app = express(); // Create an Express app instance
app.use(cors()); // Enable CORS so React app can call this server

// Connect to MongoDB database called "talhadb" running locally
mongoose.connect("mongodb://127.0.0.1:27017/talhadb", {
  useNewUrlParser: true,           // Use new URL parser
  useUnifiedTopology: true,        // Use new MongoDB engine
});

// Define a schema (structure) for "User" documents in MongoDB
const UserSchema = new mongoose.Schema({ name: String });

// Create a model from the schema to interact with the "users" collection
const User = mongoose.model("User", UserSchema);

// Create a GET endpoint at /users to return all users from MongoDB
app.get("/users", async (req, res) => {
  const users = await User.find(); // Find all user documents in the database
  res.json(users); // Send the data as JSON to the client (e.g., React)
});

// Start the server on port 5000 and log a message when it's running
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
