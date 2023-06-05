const { default: mongoose } = require("mongoose");


const WriterSchema = new mongoose.Schema({
    firstName:String,
    surname:String,
    birthDate: Date,
    books:[{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]

})


const Writer = mongoose.model('Writer', WriterSchema);

module.exports = {
    Writer
}