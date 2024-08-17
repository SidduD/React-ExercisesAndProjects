import { useTransaction } from "../context/TransactionContext";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useTransaction();
  return (
    <div className="flex items-center justify-center group">
      <button
        //When passing a prop in can't do deleteTransaction(transaction.id) as it will render right away
        onClick={() => deleteTransaction(transaction.id)}
        className="px-2 mx-1 opacity-0 group-hover:opacity-100 text-stone-100 transition-all duration-300 bg-red-500 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1"
      >
        x
      </button>
      <div
        className={`mb-2 px-4 py-3 flex items-center border-r-4 justify-between bg-stone-100 grow ${
          transaction.amount > 0 ? "border-green-400" : "border-red-400 "
        }`}
      >
        <p>{transaction.text}</p>
        <p>
          {transaction.amount > 0
            ? `+$${transaction.amount}`
            : `-$${Math.abs(transaction.amount)}`}
        </p>
      </div>
    </div>
  );
}

export default TransactionItem;
