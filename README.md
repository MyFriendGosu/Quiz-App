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
│   └── quizController.js     # Scoring, data fetching, and quiz operations
├── node_modules/             # Installed npm packages (auto-generated)
├── public/                   # Static assets served to the client
│   ├── js/
│   │   └── quiz.js           # Timer, UI interactions, and client-side logic
│   └── sounds/               # Audio feedback files
│       ├── correct.mp3       # Correct answer audio
│       ├── fail.mp3          # Quiz failure audio
│       ├── success.mp3       # Quiz success audio
│       └── wrong.mp3         # Wrong answer audio
├── routes/
│   └── quizRoutes.js         # Endpoint definitions for the quiz API
├── test/
│   └── test.quiz.js          # Unit tests for quiz functionality
├── views/                    # EJS template files (UI)
│   ├── partials/             # Reusable EJS components
│   │   ├── footer.ejs        # Shared footer partial
│   │   └── header.ejs        # Shared header partial
│   ├── about.ejs             # About page template
│   ├── developers.ejs        # Developers page template
│   ├── home.ejs              # Home / landing page template
│   ├── profile.ejs           # User profile page template
│   ├── quiz.ejs              # Quiz interface template
│   ├── result.ejs            # Quiz result page template
│   ├── settings.ejs          # Settings page template
│   └── stats.ejs             # Statistics page template
├── app.js                    # Express server entry point
├── package-lock.json         # Locked dependency tree
├── package.json              # Dependencies, scripts, and metadata
└── README.md                 # Project documentation and structure