import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import emailjs from '@emailjs/nodejs';

dotenv.config(); // reads .env file, parses contents, and loads into process

const app = express(); //initializes express application
const PORT = process.env.PORT || 4732; // Sets port to 4732 if not set as env variable
// Will be set to env variable when deploying

app.use(cors()); // Allows requests from different origins
app.use(express.json()); // Enables json parsing for incoming requests
// POST requests that send JSON won't work without

const __dirname = path.resolve(); // Absolute path to current working directory
const clientBuildPath = path.join(__dirname, '../client/dist'); 
// Assuming file structure is client and server as 2 separate subfolders, and server.js in server
// And dist (the built React app after running "npm run build" inside the client folder) at client/dist

app.use(express.static(clientBuildPath)); // Serves static files
app.get('*', (req, res) => { // Handles all unknown routes and tells them to be routed to index.html
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// API route for contact form
app.post('/api/contact', async (req, res) => {
    console.log('Received request:', req.body); // Debugging

    // Parse the request to populate all the fields
    const { first_name, last_name, email, phone, message } = req.body;

    // Handle missing field
    if (!first_name || !last_name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const emailData = {
        service_id: process.env.EMAIL_JS_SERVICE_ID,
        template_id: process.env.EMAIL_JS_TEMPLATE_ID,
        publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
        template_params: { first_name, last_name, email, phone, message },
    };

    try {
        // Make EmailJS request
        const response = await emailjs.send(
            emailData.service_id,
            emailData.template_id,
            emailData.template_params,
            { publicKey: emailData.publicKey }
        );

        console.log('EmailJS Response:', response);
        res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('EmailJS Error:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

// Start the server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
