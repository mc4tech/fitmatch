const router = require("express").Router();
const userRoutes = require("./users.js");

// Users routes
router.use("/users", userRoutes);

module.exports = router;
