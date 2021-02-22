const { Router } = require('express')

const { Question } = require('../../../models')

const router = new Router({ mergeParams: true })

router.get('/status', (req, res) => {
  try {
    res.status(200).json('Server ON. Quiz id: '.concat(req.params.quizId.toString()))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:questionId', (req, res) => {
  console.log(req.params.toString())
  try {
    res.status(200).json(Question.getById(req.params.questionId))
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', (req, res) => {
  console.log(req.body.toString())
  try {
    res.status(200).json(Question.create(req.body, req.params.questionId))
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
