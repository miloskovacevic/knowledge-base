var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({

    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String,
        index: true,
        required: true
    }
});

var Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategories = function(callback){
    Category.find(callback);
}

//get category by id
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}

//get category articles
module.exports.getArticleByCategory = function (category, callback) {
    var query = {category: category};

    Article.find(query, callback);
}

module.exports.createCategory = function (newCategory, callback) {
    newCategory.save(callback);
}

//
