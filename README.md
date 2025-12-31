# 🚀 TaskPro - Intelligent Task Management App

![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

TaskPro is a full-stack task management application designed to help users organize their daily goals with efficiency and style. Built with the **MERN Stack** (MongoDB, Express, React/Next.js, Node.js), it features secure authentication, real-time updates, and a modern, responsive UI.

## ✨ Features

* **🔐 Secure Authentication:** JWT-based login/registration with Bcrypt password hashing.
* **🛡️ Enterprise Security:** Protected with `Helmet` headers and strict input validation.
* **📊 Dynamic Dashboard:** Visual progress tracking with completion bars and stats.
* **⚡ Real-time Operations:** Instant Add, Edit, Delete, and Complete tasks.
* **🎨 Modern UI/UX:** Built with Tailwind CSS, featuring responsive design, priority badges, and smooth transitions.
* **📅 Smart Organization:** Sort tasks by Priority (High/Med/Low) and Due Dates.

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS, HeroIcons, React Hot Toast
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Security:** JSON Web Tokens (JWT), Bcrypt.js, Helmet, CORS

## 📸 Screenshots

*(Add screenshots of your Dashboard and Login page here later to make it look amazing!)*

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

* Node.js installed
* MongoDB installed or a MongoDB Atlas URI

1. Clone the Repository

git clone [https://github.com/arunkumarsing-20/pro-task-manager.git](https://github.com/arunkumarsing-20/pro-task-manager.git)
cd pro-task-manager

2. Backend Setup (Server)
Bash

cd server
npm install
Create a .env file in the server folder and add:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
Start the Server:

Bash

npm run dev
(You should see: 🚀 Server running on port 5000)

3. Frontend Setup (Client)
Open a new terminal:

Bash

cd client
npm install
npm run dev
Open your browser and visit: http://localhost:3000

📂 Project Structure
Bash

pro-task-manager/
├── client/          # Frontend (Next.js + Tailwind)
│   ├── pages/       # Application Routes
│   ├── components/  # Reusable UI Components
│   └── styles/      # Global CSS & Tailwind Config
└── server/          # Backend (Node + Express)
    ├── models/      # Database Schemas
    ├── routes/      # API Endpoints
    └── middleware/  # Auth & Security Checks
🛡️ Security Measures
This project implements industry-standard security practices:

Password Salting & Hashing: User passwords are never stored in plain text.

JWT Authentication: Stateless authentication mechanism for secure API access.

Input Validation: Regex checks for strong passwords and email formats.

HTTP Headers: Helmet.js is used to secure HTTP headers against common vulnerabilities.

🤝 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

Made with ❤️ by Arun Kumar Singh


### **Final Step: Update GitHub**
1.  Paste this code into your `README.md`.
2.  Save the file.
3.  Run these commands to send the updated README to GitHub:
    ```bash
    git add README.md
    git commit -m "Update README with correct username"
    git push
    ```

Check your link now: **[https://github.com/arunkumarsing-20/pro-task-manager]
