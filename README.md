# 🧠 General Knowledge Quiz App

A web-based **General Knowledge Quiz Application** built using **Node.js**, **Express.js**, and **EJS**, styled with **Tailwind CSS** and enhanced with **Material UI Icons**.  
Questions are fetched dynamically from the **Open Trivia Database (OpenTDB)** API.

## 📌 Features

- ✅ General Knowledge questions only (OpenTDB Category 9)
- ⏱ 15-second timer per question
- 🔁 One question displayed at a time
- ✔ Correct answer indicator
- ✖ Incorrect answer indicator
- 🔀 Randomized answer choices
- 🎯 Automatic next question
- 📱 Responsive UI using Tailwind CSS
- 🧩 MVC architecture (Controllers, Routes, Views)

## 🛠 Technologies Used

### Backend
- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript Templates)

### Frontend
- HTML5
- Tailwind CSS (CDN)
- JavaScript (Vanilla)
- Material UI Icons (Google Fonts)

### API
- Open Trivia Database (https://opentdb.com)

---

## 📂 Project Structure

QUIZ APP/
├── controllers/
│   └── quizController.js     # Logic for quiz operations (scoring, data fetching)
├── node_modules/             # Installed npm packages
├── public/                   # Static assets served to the client
│   ├── js/
│   │   └── quiz.js           # Client-side logic (timer, UI interactions)
│   └── sounds/               # Audio feedback files
│       ├── correct.mp3
│       ├── fail.mp3
│       ├── success.mp3
│       └── wrong.mp3
├── routes/
│   └── quizRoutes.js         # Endpoint definitions
├── test/
│   └── test.quiz.js          # Unit tests for quiz functionality
├── views/                    # EJS Templates
│   ├── partials/             # Reusable components
│   │   ├── footer.ejs
│   │   └── header.ejs
│   ├── about.ejs
│   ├── developers.ejs
│   ├── home.ejs
│   ├── profile.ejs
│   ├── quiz.ejs
│   ├── result.ejs
│   ├── settings.ejs
│   └── stats.ejs
├── app.js                    # Express server entry point
├── package-lock.json
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation and structure