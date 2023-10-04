import Order from "../models/order";

//Get all orders

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Faild to fetch orders!" });
  }
};

//Get order by id
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ error: "Order not found !" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order !" });
  }
};

//Create a new order
const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a order !" });
  }
};

//Delete a order by id
const deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a Order !" });
  }
};

//edit a order by id
const editOrderById = async (req, res) => {
  try {
    const order = await order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a Oreder !" });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrderById,
  editOrderById,
};
