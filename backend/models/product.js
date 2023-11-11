import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  Distrubuter_id: { type: String, required: true },
  producer_id: { type: String, required: true },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;