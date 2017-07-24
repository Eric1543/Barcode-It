// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ItemSchema = new Schema({
  // title is a required string
  name: {
    type: String,
    required: true
  },
  // link is a required string
  type: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  barcodeId: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  numberSold: {
    type: Number,
    required: true
  }
}, {collection: "item"});

// Create the Article model with the ArticleSchema
var Item = mongoose.model("Item", ItemSchema);

// Export the model
module.exports = Item;
