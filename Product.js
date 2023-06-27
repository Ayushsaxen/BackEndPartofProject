const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    company:String
})
module.exports = mongoose.model("products",productSchema)


