import asyncHandler from "../middleware/asyncHandler.js";
import Transaction from "../models/transaction.js";

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
const addTransaction = asyncHandler(async (req, res) => {
  const { date, price, quantity, Distrubuter_id, producer_id } = req.body;

  const transaction = new Transaction({
    date,
    price,
    quantity,
    Distrubuter_id,
    producer_id,
  });

  const createdTransaction = await transaction.save();

  res.status(201).json(createdTransaction);
});

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private/Admin
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({});
  res.json(transactions);
});

export { addTransaction, getTransactions };
