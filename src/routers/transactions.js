import express from "express";
import {
  getTransactionsByUserId,
  insertNewTrans,
} from "../models/transaction/TransactionModel.js";
const router = express.Router();

// router = {
//     get("/", (req,res)=>{}) ,
//     post(){}

// }

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const trans = (await getTransactionsByUserId(authorization)) ?? [];
    res.json({
      status: "success",
      message: "Here are the list of the transactions",
      trans,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { authorization } = req.headers;

    const result = await insertNewTrans({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Newansaction has been added",
        })
      : res.json({
          status: "error",
          message: "Unabel to process your request, try again later",
        });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
