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
    }

}, { timestamps: true, versionKey: false });

const books = mongoose.model("Book", bookSchema);
exports.Book = books;

