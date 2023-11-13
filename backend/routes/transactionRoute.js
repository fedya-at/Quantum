import express from "express";
import {
  addTransaction,
  getTransactions,
} from "../controllers/transactionController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.route("/").post(protect, addTransaction).get(protect, admin, getTransactions);

export default router;
