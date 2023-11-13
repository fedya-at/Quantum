import Product from "../models/product.js";

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products!" });
  }
};

// Get Product by id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product not found!" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product!" });
  }
};
//get all transactions of product
const getproducttransction=async (req,res)=>{
  try{
  const transactions = await Product.findById(req.params.id).populate("transactions").transactions;
  if(!transactions){
    res.status(404).json({ error: "There is no transactions" });
  }else{
    res.json(transactions);
  }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions of this product!" });
  }   
}

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a product!" });
  }
};

// Delete a product by id
const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete a product!" });
  }
};

// Edit a product by id
const editProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product edited successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Failed to edit a product!" });
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
  getproducttransction,
};
