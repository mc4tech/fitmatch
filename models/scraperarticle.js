const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scraperArticleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date },
  link: { type: String, required: true }
  // note: {type: Schema.Types.ObjectId, ref: "ScraperNote"}
  
});

const ScraperArticle = mongoose.model("ScraperArticle", scraperArticleSchema);

module.exports = ScraperArticle;