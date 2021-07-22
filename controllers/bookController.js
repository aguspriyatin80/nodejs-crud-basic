const { Book } = require("../models/Book");
exports.Create = async(req, res, next) => {
    try {
        let book = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: "Successfully created data!",
            book,
        });
    } catch (err) {
        next(err);
    }
};

exports.Read = async(req, res, next) => {
    try {
        let books = await Book.find();
        res.status(200).json({
            success: true,
            message: "Successfully retrieve the data",
            books
        })
    } catch (err) {
        next(err);
    }
}

exports.BookById = async (req, res, next) => {
	try {
	    const  {id}  = req.params;
	    let book = await Book.findById({_id: id})
	    res.status(200).json({
            success: true,
            msg: "Successfully retrieve product data",
		    book
	    });
	} catch (err) {
	  next(err);
	}
  };


exports.Update = async(req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) return next({ message: "Missing ID parameters" });
        const book = await Book.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            success: true,
            message: "Successfully updated data",
            book
        })
    } catch (err) {
        next(err);
    }
}

exports.Delete = async(req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) return next({ message: "Missing ID Params" });

        await Book.findByIdAndRemove(id, (error, doc, result) => {
            if (error) throw "Failed to delete";
            if (!doc)
                return res.status(400).json({ success: false, err: "Data not found!" });
            res.status(200).json({
                success: true,
                message: "Successfully deleted data!",
                data: doc,
            });
        });
    } catch (err) {
        next(err);
    }
};