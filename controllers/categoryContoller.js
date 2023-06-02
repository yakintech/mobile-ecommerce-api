const { Category } = require("../models/Category")


const categoryController = {
    getAll: (req, res) => {

        Category.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    getById: (req, res) => {
        let id = req.params.id;

        Category.findById(id)
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(400).json({ 'msg': 'Not Found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        var category = new Category({
            name: req.body.name,
            description: req.body.description
        })

        category.save();

        res.json(category)
    },
    delete: (req, res) => {
        let id = req.params.id

        Category.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    categoryController
}