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

QUIZ APP
├── controllers
│   └── quizController.js
├── node_modules
├── public
│   ├── js
│   │   └── quiz.js
│   └── sounds
│       ├── correct.mp3
│       ├── fail.mp3
│       ├── success.mp3
│       └── wrong.mp3
├── routes
│   └── quizRoutes.js
├── test
│   └── test.quiz.js
├── views
│   ├── partials
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
├── app.js
├── package-lock.json
├── package.json
└── README.md