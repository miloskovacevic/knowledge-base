var express = require('express');
var router = express.Router();
var Category = require('../models/category');

router.get('/', function(req, res, next) {
    Category.getCategories(function (err, categories) {
        if(err){
            throw err;
        }

        res.json(categories);
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    Category.getCategoryById(id, function (err, category) {
        if(err){
            throw err;
        }

        res.json(category);
    });
});

module.exports = router;
