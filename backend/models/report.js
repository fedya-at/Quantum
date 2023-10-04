import { Schema, model } from "mongoose";

const reportSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  responsiblePerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
