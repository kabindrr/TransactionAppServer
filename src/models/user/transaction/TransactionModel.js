import TransactionSchema from "./TransactionSchema.js";

export const insertNewTrans = (transObj) => {
  return TransactionSchema(transObj).save();
};
export const getTransactionById = (userId) => {
  return TransactionSchema.find(userId);
};
