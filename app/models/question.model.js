const Joi = require('joi')
const QuestionModel = require('../utils/question-model.js')

module.exports = new QuestionModel('Question', {
  label: Joi.string().required(),
  answers: Joi.array(),
  quizId: Joi.number(),
})
