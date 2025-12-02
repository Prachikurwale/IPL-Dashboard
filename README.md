IPL Live Score Dashboard

A responsive, full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack to display live and completed IPL match scores.

Key Features
Displays Live, Completed, and Upcoming match status.

Shows detailed scores, overs, and match result summaries.

Basic mobile responsiveness.


How to Run Locally
You must run the backend and frontend simultaneously in two separate terminal windows.

Prerequisites
Node.js installed.

A running MongoDB instance (Atlas recommended) with a MONGO_URI.

1. Backend Setup & Start
Navigate to the backend/ folder.

Install dependencies: npm install

Create a .env file and add your MongoDB connection string:

Code snippet

MONGO_URI=mongodb+srv://...
PORT=5000
Start the server:  node server.js

2. Frontend Setup & Start
Open a new terminal tab and navigate to the frontend/ folder.

Install dependencies: npm install

Start the client: npm run dev
