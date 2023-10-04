const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.delete("/id", productController.deleteProductById);
router.put("/", productController.updateProductById);

module.expors = router;
