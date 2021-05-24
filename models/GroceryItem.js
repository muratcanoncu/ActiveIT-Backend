const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroceryItemSchema = new Schema({
  importance: Number,
  name: String,
  amount: Number,
  done: Boolean,
});

const GroceryItem = mongoose.model("GroceryItem", GroceryItemSchema);
module.exports = GroceryItem;
