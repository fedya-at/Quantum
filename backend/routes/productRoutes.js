import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
} from "../controllers/productController.js";

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.delete("/id", deleteProductById);
router.put("/", editProductById);

export default router;
