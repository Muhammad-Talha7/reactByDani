import express from "express";
import connectDB from "./db.js";

const app = express();

connectDB();
// endpoint
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/contact", (req, res) => {
  // Save something in database
  res.send("Contact world");
});

app.get("/about", (req, res) => {
  res.send("About world");
});

app.get('/getEmails', async (req, res) => {
    try {
        const db = (await import('mongoose')).default.connection;
        const emails = await db.collection('emails').find({}).toArray();
        res.send(emails);
    } catch (err) {
        res.status(500).send({ error: 'Database error' });
    }
});

app.listen(3000);
