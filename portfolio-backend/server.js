const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Essential for parsing incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected securely to MongoDB Atlas"))
  .catch((err) => console.error("Database connection failure:", err));

// --- Schemas & Models ---

// Contact Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: 'Portfolio Contact' },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// Project Schema (To fetch your featured projects dynamically)
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  tags: [String]
});
const Project = mongoose.model('Project', ProjectSchema);


// --- Transporter for Nodemailer Email Alerts ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// --- API Routes ---

// 1. POST: Receive Contact Form Messages
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save submission data to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send email alert to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Alert: ${subject || 'New Connection Request'}`,
      text: `You have received a new contact message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Message processed and sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// 2. GET: Retrieve Projects for your grid dynamically
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching data" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server executing cleanly on port ${PORT}`);
});