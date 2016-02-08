var express = require('express');
var router = express.Router();
var Article = require('../models/article');


router.get('/', function(req, res, next) {
  Article.getArticles(function (err, articles) {
      if(err){
        throw err;
      }

      res.json(articles);
  });
});


router.get('/:id', function(req, res, next) {
    var id = req.params.id;

    Article.getArticleById(id, function (err, article) {
        if(err){
            throw err;
        }

        res.json(article);
    });
});

router.get('/category/:category', function(req, res, next) {
    var category = req.params.category;

    Article.getArticleByCategory(category, function (err, articles) {
        if(err){
            throw err;
        }

        res.json(articles);
    });
});

module.exports = router;
