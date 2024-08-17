import { useTransaction } from "../context/TransactionContext";

function IncomeExpense() {
  const { transactions } = useTransaction();

  const income = transactions.reduce((accumulator, transaction) => {
    if (transaction.amount > 0) {
      return (accumulator += transaction.amount);
    } else return accumulator;
  }, 0);

  const expense = transactions.reduce((accumulator, transaction) => {
    if (transaction.amount < 0) {
      return (accumulator += Math.abs(transaction.amount));
    } else return accumulator;
  }, 0);

  return (
    <div className=" flex flex-col sm:divide-x-4 divide-stone-300 sm:flex-row items-center justify-center text-center uppercase px-4  ">
      <div className="py-4 px-14 mb-2 w-1/2 bg-stone-100 sm:px-16 sm:text-xl  sm:mb-0 shadow-md">
        <label>income</label>
        <p className="text-emerald-500 ">{`$${income.toFixed(2)}`}</p>
      </div>
      <div className="py-4 px-14 w-1/2  bg-stone-100 sm:px-16 sm:text-xl shadow-md">
        <label>expense</label>
        <p className="text-red-500">{`$${expense.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
