import express from "express";
const router = express.Router();
import {
  getAllReports,
  getReportById,
  addReport,
  deleteReport,
  editReport,
} from "../controllers/reportController.js";

// Get all reports
router.get("/", getAllReports);

// Get report by ID
router.get("/:id", getReportById);

// Add a new report
router.post("/", addReport);

// Delete a report
router.delete("/:id", deleteReport);

// Edit a report
router.put("/:id", editReport);

export default router;
