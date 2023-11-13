import mongoose from "mongoose";
// modifier transactions a plusieur transaction d'un produit 
const productSchema = mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  Distrubuter_id: { type: String, required: true },
  producer_id: { type: String, required: true },
  transactions:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
  }],
});

const Product = mongoose.model("Product", productSchema);

export default Product;