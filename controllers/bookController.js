const { Book } = require("../models/Book");
// exports.Create = async(req, res, next) => {
//     try {
//         let book = await Book.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: "Successfully created data!",
//             book,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

exports.Create = async(req, res, next) => {
    try {
        let obj = {};
        const { title, author, publisher, publication_year, cost_price, sale_price, quantity } = req.body;
        if (title) obj.title = title;
        if (author) obj.author = author;
        if (publisher) obj.publisher = publisher;
        if (publication_year) obj.publication_year = publication_year;
        if (cost_price) obj.cost_price = cost_price;
        if (sale_price) obj.sale_price = sale_price;
        if (quantity) obj.quantity = quantity;
        if (req.file && req.file.fieldname && req.file.path)
            obj.bookImage = req.file.path;

        let data = await Book.create(obj);

        res.status(201).json({
            success: true,
            message: "Successfully created data!",
            data,
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


// exports.Update = async(req, res, next) => {
//     try {
//         const { id } = req.params;
//         if (!id) return next({ message: "Missing ID parameters" });
//         const book = await Book.findByIdAndUpdate(id, { $set: req.body }, { new: true });
//         res.status(200).json({
//             success: true,
//             message: "Successfully updated data",
//             book
//         })
//     } catch (err) {
//         next(err);
//     }
// }

exports.Update = async(req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) return next({ message: "Missing ID parameters" });
        let obj = {};
        const { title, author, publisher, publication_year, cost_price, sale_price, quantity } = req.body;
        if (title) obj.title = title;
        if (author) obj.author = author;
        if (publisher) obj.publisher = publisher;
        if (publication_year) obj.publication_year = publication_year;
        if (cost_price) obj.cost_price = cost_price;
        if (sale_price) obj.sale_price = sale_price;
        if (quantity) obj.quantity = quantity;
        if (req.file && req.file.fieldname && req.file.path) obj.bookImage = req.file.path;
        const updateData = await Book.findByIdAndUpdate(id, { $set: obj }, { new: true });
        
        
        res.status(200).json({
            success: true,
            message: "Successfully updated data",
            updateData
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