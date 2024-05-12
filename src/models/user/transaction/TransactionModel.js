import TransactionSchema from "./TransactionSchema.js";

export const insertNewTrans = (transObj) => {
  return TransactionSchema(transObj).save();
};
export const getTransactionById = (userId) => {};
export const deleteTransactionsForUser = ({ userId, idsToDelete }) => {
  return !UserId ? null : TransactionSchema.find({ userId });
};
