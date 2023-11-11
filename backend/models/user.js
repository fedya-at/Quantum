import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: Number, required: true },
  roles: [
    {
      type: String,
      enum: ['admin', 'controleur', 'producteur', 'distributeur'],
      default: 'producteur',
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
