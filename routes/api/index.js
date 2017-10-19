const router = require("express").Router();
const userRoutes = require("./users.js");
const scraperNote = require("./models/scrapernote.js");
const scraperArticle = require("./models/scraperarticle.js");

// Users routes
router.use("/users", userRoutes);
router.use("/scrape", userRoutes);
router.use("/articles", userRoutes);


module.exports = router;
