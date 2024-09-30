const multer = require("multer");

// Set up memory storage for Multer
const storage = multer.memoryStorage();

// Initialize Multer with memory storage
const upload = multer({ storage: storage });

module.exports = upload;
