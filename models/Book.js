const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    publication_year: {
        type: Number,
        required: true,
    },
    cost_price: {
        type: Number,
        required: true,
    },
    sale_price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    bookImage: {
        type: String,
        default: "https://res.cloudinary.com/du4xfo1tl/image/upload/v1606562656/samples/cloudinary-icon.png",
    },

}, { timestamps: true, versionKey: false });

const books = mongoose.model("Book", bookSchema);
exports.Book = books;

