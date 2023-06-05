const { default: mongoose } = require("mongoose");


const WriterBookSchema = mongoose.Schema({
    writer: { type: mongoose.Schema.Types.ObjectId, ref: 'Writer' },
    book : { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
})

const WriterBook = mongoose.model('WriterBook', WriterBookSchema)

module.exports = {
    WriterBook
}