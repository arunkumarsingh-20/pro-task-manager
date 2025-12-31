# 🚀 TaskPro - Intelligent Task Management App

![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

**TaskPro** is a full-stack task management application designed to help users organize their daily goals with efficiency and style. Built with the **MERN Stack** (MongoDB, Express, React/Next.js, Node.js), it features secure authentication, real-time updates, and a modern, responsive UI.

---

## 📸 Application Screenshots

Here is a glimpse of the application in action.

| **Dashboard & Task Management** | **Task Creation & Inputs** |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/78b56d84-008f-402e-9e36-fbce4d17d6d9" width="100%" alt="Dashboard View"> | <img src="https://github.com/user-attachments/assets/dbc2a3f6-52d8-43ff-9fe9-e6c560edac52" width="100%" alt="Task Input"> |
| **Profile & Settings** | **Secure Authentication** |
| <img src="https://github.com/user-attachments/assets/61bbdba6-4194-4da0-96fb-64871d9b0bcc" width="100%" alt="Profile Page"> | <img src="https://github.com/user-attachments/assets/487cafa2-b275-42b3-a902-57dc6598452a" width="100%" alt="Login Screen"> |

---

## ✨ Key Features

* **🔐 Secure Authentication:** JWT-based login and registration system with secure Bcrypt password hashing.
* **🛡️ Enterprise Security:** Protected with `Helmet` HTTP headers and strict server-side input validation.
* **📊 Dynamic Dashboard:** Visual progress tracking with real-time completion bars and statistics.
* **⚡ Real-time Operations:** Instant capability to Add, Edit, Delete, and toggle completion status of tasks.
* **🎨 Modern UI/UX:** Built with **Tailwind CSS**, featuring a fully responsive design, priority color badges, and smooth animations.
* **📅 Smart Organization:** Sort tasks automatically by Priority (High/Medium/Low) and Due Dates.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React, Tailwind CSS, HeroIcons, React Hot Toast
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Security:** JSON Web Tokens (JWT), Bcrypt.js, Helmet, CORS

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
* Node.js installed
* MongoDB installed locally or a MongoDB Atlas connection string

### 1. Clone the Repository
git clone [https://github.com/arunkumarsing-20/pro-task-manager.git](https://github.com/arunkumarsing-20/pro-task-manager.git)
cd pro-task-manager


### 2. Backend Setup (Server)
Navigate to the server folder and install dependencies:

Bash

cd server
npm install
Create a .env file in the server folder and add the following variables:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
Start the Server:

Bash

npm run dev
(You should see: 🚀 Server running on port 5000)

### 3. Frontend Setup (Client)
Open a new terminal window, navigate to the client folder, and install dependencies:

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
This project implements industry-standard security practices to ensure data safety:

Password Salting & Hashing: User passwords are never stored in plain text; they are hashed using Bcrypt.

JWT Authentication: Uses a stateless authentication mechanism for secure, scalable API access.

Input Validation: regex checks enforce strong passwords and valid email formats before hitting the database.

HTTP Headers: Helmet.js is utilized to secure HTTP headers against common web vulnerabilities.

🤝 Contributing
Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

<p align="center"> Made with ❤️ by <b>Arun Kumar Singh</b> </p>
