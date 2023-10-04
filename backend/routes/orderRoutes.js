const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.delete("/id", orderController.deleteOrdertById);
router.put("/", orderController.updateOrderById);

module.expors = router;