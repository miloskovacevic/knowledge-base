var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({

    title: {
        type: String,
        index: true,
        required: true
    },

    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.getArticles = function(callback){
    Article.find(callback);
}

//get article by id
module.exports.getArticleById = function(id, callback){
    Article.findById(id, callback);
}

//get category articles
module.exports.getArticleByCategory = function (category, callback) {
    var query = {category: category};

    Article.find(query, callback);
}

//
