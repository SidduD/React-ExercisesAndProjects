import { useTransaction } from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useTransaction();
  return (
    <div className="px-4 my-5 max-h-64 overflow-y-scroll">
      <h3 className=" my-3 border-b-2 border-stone-300 font-semibold text-slate-500">
        History
      </h3>

      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
