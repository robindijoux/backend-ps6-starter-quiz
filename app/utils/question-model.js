/* eslint-disable no-param-reassign */
const Joi = require('joi')
const ValidationError = require('./errors/validation-error.js')
const BaseModel = require('./base-model')

module.exports = class QuestionModel extends BaseModel {
  create(obj = {}, quizId) {
    if (typeof quizId === 'string') quizId = parseInt(quizId, 10)
    const item = { ...obj, quizId, id: Date.now() }
    const { error } = Joi.validate(item, this.schema)
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error)
    this.items.push(item)
    this.save()
    return item
  }
}
