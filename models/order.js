import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  placedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  authorizedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Order = model("Order", orderSchema);

export default Order;
