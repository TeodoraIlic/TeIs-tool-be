const mongoose = require('mongoose');

//definition
const postSchema = mongoose.Schema({
    title: { type: String, require: true},
    content: { type: String, require: true},
    filePath: { type: String, require: true},
    creator: { type: String, require: true}
});

//turn definition into model
module.exports = mongoose.model('Post', postSchema);