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

//post requests
router.post('/', function(req, res, next){
    //get form values
    var title    = req.body.title;
    var category = req.body.category;
    var body     = req.body.body;

    //construct article object
    var newArticle = new Article({
        title:    title,
        category: category,
        body:     body
    });

    //create article method
    Article.createArticle(newArticle, function(err, article){
        if(err){
            throw err;
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

router.put('/', function (req, res, next) {
    var id = req.body.id;
    var data = {
        title:    req.body.title,
        category: req.body.category,
        body:     req.body.body
    };

    //create article
    Article.updateArticle(id, data, function (err, article) {
        if(err){
            throw err;
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

//delete route
router.delete('/:id', function(req, res, next){
    var id = req.params.id;

    //delete article
    Article.removeArticle(id, function (err, status) {
        if(err){
            throw err;
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

module.exports = router;
