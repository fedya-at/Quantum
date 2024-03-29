import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Phone_number:{ type: Number, required: true },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  isControleur: {
    type: Boolean,
    required: true,
    default: false,
  },
  isProducteur: {
    type: Boolean,
    required: true,
    default: false,
  },
  isDistributeur: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
