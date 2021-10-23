const path = require("path");
const router = require("express").Router();

router.use(require("./notesRoutes"));

module.exports = router;
