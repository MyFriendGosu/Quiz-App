const axios = require('axios');

exports.home = (req, res) => {
  res.render('home');
};

exports.about = (req, res) => {
  res.render('about');
};

exports.quiz = (req, res) => {
  res.render('quiz');
};

exports.getQuestions = async (req, res) => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=9&type=multiple'
    );
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

exports.result = (req, res) => {
  const { score, total } = req.query;
  res.render('result', { score, total });
};