const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloud config
cloudinary.config({
    cloud_name: "du4xfo1tl",
    api_key: "973732985841749",
    api_secret: "Keo5JExCUdK9kY5UES55jYlfloU",
});

// storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "books",
    allowedFormats: ["jpg", "jpeg", "png", "svg"],
    filename: (req, files, cb) => {
        cb(null, Date.now() + "_" + files.originalname.split(".")[0]);
    },
});

const uploader = multer({
    storage: storage,
});

module.exports = uploader;

