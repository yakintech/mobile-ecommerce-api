const express = require('express');
const { categoryController } = require('../controllers/categoryContoller');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');

const router = express.Router();


router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)

router.post(
    '/',
    [body('name').notEmpty().withMessage("Name alanı boş geçilemez!")],
    [body('description').notEmpty()],
    validate,
    categoryController.add)

router.delete('/:id', categoryController.delete)


module.exports = router;