import { createContext, useContext, useReducer } from "react";

const TransactionContext = createContext();

//Initial State
const initialState = {
  transactions: [],
  balance: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "transaction/created":
      return {
        ...state,
        // balance: state.balance + action.payload.amount,
        transactions: [...state.transactions, action.payload],
        balance: state.balance + action.payload.amount
      };
    case "transaction/deleted":
      const transactionToDelete = state.transactions.find(
        (transaction) => transaction.id === action.payload
      );
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        balance: state.balance - transactionToDelete.amount
      };

    default:
      throw new Error("Action unknown");
  }
}

function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "transaction/deleted",
      payload: id
    });
  }

  function createTransaction(text, amount) {
    dispatch({
      type: "transaction/created",
      payload: {
        id: state.transactions.length + 1,
        text,
        amount
      }
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        balance: state.balance,
        deleteTransaction,
        createTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  const context = useContext(TransactionContext);
  if (context === undefined)
    throw new Error(
      "TransactionContext was used outside the TransactionProvider"
    );
  return context;
}

export { TransactionProvider, useTransaction };
