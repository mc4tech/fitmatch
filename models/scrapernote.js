const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scraperNoteSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  
});

const ScraperNote = mongoose.model("ScraperNote", scraperNoteSchema);

module.exports = ScraperNote;
