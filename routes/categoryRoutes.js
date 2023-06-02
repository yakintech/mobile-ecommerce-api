const express = require('express');
const { categoryController } = require('../controllers/categoryContoller');

const router = express.Router();


router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post('/', categoryController.add)
router.delete('/:id', categoryController.delete)


module.exports = router;