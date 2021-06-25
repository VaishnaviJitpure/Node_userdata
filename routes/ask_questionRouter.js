const express = require("express");
const router = express.Router();
const ask_questionController = require("../controllers/ask_questionController");

// Create One Route
router.post("/registration",ask_questionController.create);

//get one Routes by id
router.get("/registration/:id",ask_questionController.get);

//get all record
router.get("/registration",ask_questionController.allRecords);

//update record by id
router.put("/registration/:id",ask_questionController.edit);

//Delete Record By Id
router.delete("/registration/:id",ask_questionController.delete);

module.exports = router;