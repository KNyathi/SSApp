import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { createOrder } from "../controllers/order.controller";

const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder); //WHEN DELETING COURSE, MAKE AN IMPLEMENTATION TO REDUCE PURCHASED BY 1

export default orderRouter;