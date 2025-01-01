const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data for Projects and Blog Posts
let projects = [
    { id: 1, title: "Library Management System", description: "A web application designed to manage and store book information electronically." },
    { id: 2, title: "NutriTrack Web Application", description: "A nutrition tracker that helps users monitor and plan their dietary needs." }
];

let blogPosts = [
    { id: 1, title: "Building a Library Management System", content: "Libraries have always been a cornerstone of knowledge... [complete details in your blog]" },
    { id: 2, title: "NutriTrack: Simplifying Nutrition Management", content: "Tracking your daily diet has never been easier... [your blog content]" }
];

// API Endpoints
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/blog', (req, res) => {
    res.json(blogPosts);
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});


// Starting the Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
