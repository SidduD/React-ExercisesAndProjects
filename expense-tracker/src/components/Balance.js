import { useTransaction } from "../context/TransactionContext";

function Balance() {
  const { balance } = useTransaction();
  return (
    <div className="font-semibold px-4 py-6 leading-3 sm:text-xl">
      <h4>Your Balance</h4>
      <h2 className="text-3xl">{`$${balance.toFixed(2)}`}</h2>
    </div>
  );
}

export default Balance;
