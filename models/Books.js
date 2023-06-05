const { default: mongoose } = require("mongoose");


const BookSchema = new mongoose.Schema({
    name: String,
    publishDate: Date,
    description: String,
    writers:[{ type: mongoose.Schema.Types.ObjectId, ref: 'writer' }]
})


const Book = mongoose.model("Book", BookSchema);

module.exports = {
    Book
}
