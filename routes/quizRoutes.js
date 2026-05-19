const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/', quizController.home);
router.get('/quiz', quizController.quiz);
router.get('/about', quizController.about);

/* ✅ RESULT ROUTE */
router.get('/result', quizController.result);
router.get('/profile', (req, res) => res.render('profile'));
router.get('/stats', (req, res) => res.render('stats'));
router.get('/settings', (req, res) => res.render('settings'));
router.get('/developers', (req, res) => res.render('developers'));

/* API */
router.get('/api/questions', quizController.getQuestions);

module.exports = router;