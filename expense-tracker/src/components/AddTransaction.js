import { useState } from "react";
import Button from "./Button";
import { useTransaction } from "../context/TransactionContext";

function AddTransaction() {
  const [cashFlowType, setCashFlowType] = useState("");
  const [amount, setAmount] = useState("");

  const { createTransaction } = useTransaction();

  function handleSubmit(e) {
    e.preventDefault();

    // const newTransaction = {
    //   id: Math.floor(Math.random() * 100000000),
    //   text: cashFlowType,
    //   amount
    // };

    createTransaction(cashFlowType, Number(amount));
    setCashFlowType("");
    setAmount("");
  }
  return (
    <div className="px-4">
      <h3 className="font-semibold mb-3 border-b-2 border-stone-300 text-slate-500 ">
        Add New Transacton
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center text-sm ">
          <label className="sm:basis-60">Cash Flow Type</label>
          <input
            value={cashFlowType}
            onChange={(e) => setCashFlowType(e.target.value)}
            required
            placeholder=""
            className=" rounded-full border border-stone-200 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-slate-300 md:px-6 md:py-3 w-full"
          />
        </div>

        <div className=" mb-10 flex-col flex gap-2 sm:flex-row sm:items-center text-sm">
          <label className="sm:basis-60">Amount (-/+)</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount..."
            className="rounded-full border border-stone-200 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-slate-300 md:px-6 md:py-3 w-full"
          />
        </div>

        <div className="text-center">
          <Button>Add Transaction</Button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
