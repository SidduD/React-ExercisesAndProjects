import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { TransactionProvider } from "./context/TransactionContext";

export default function App() {
  return (
    <TransactionProvider>
      <div className="bg-stone-200 grid h-screen grid-rows-[auto_1fr_auto] text-stone-700">
        <Header />
        <div className="overflow-scroll">
          <main className="mx-auto max-w-2xl">
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
          </main>
        </div>
        <Footer />
      </div>
    </TransactionProvider>
  );
}
