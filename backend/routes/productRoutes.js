import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
  getproducttransction,
} from "../controllers/productController.js";

router.get("/", getAllProducts);
router.get("/:id", getProductById);
//ajouter un router pour afficher les transactions d'un product
router.get("transactionsof/:id",getproducttransction)
router.post("/", createProduct);
router.delete("/id", deleteProductById);
router.put("/", editProductById);

export default router;
