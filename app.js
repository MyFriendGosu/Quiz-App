const express = require('express');
const path = require('path');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', quizRoutes);

app.listen(3000, () =>
  console.log('Server running at http://localhost:3000')
);