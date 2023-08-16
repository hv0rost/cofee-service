const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.getData)
router.post('/', controller.addNewMachine)
router.patch('/increase', controller.increaseCounter)
router.patch('/decrease', controller.decreaseCounter)

module.exports = router