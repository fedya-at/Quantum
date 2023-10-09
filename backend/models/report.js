import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  responsiblePerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
