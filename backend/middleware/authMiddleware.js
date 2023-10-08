import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/user.js";

// User must be authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
// User must be an controleur
const controleur = (req, res, next) => {
  if (req.user && req.user.isControleur) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a controller");
  }
};
// User must be an producteur
const producteur = (req, res, next) => {
  if (req.user && req.user.isProducteur) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a producteur");
  }
};
// User must be an distributeur
const distributeur = (req, res, next) => {
  if (req.user && req.user.isDistributeur) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as a distributeur");
  }
};

export { protect, admin,controleur,producteur,distributeur };
