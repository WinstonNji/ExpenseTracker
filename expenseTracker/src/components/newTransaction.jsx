import { createContext, useState } from "react";

export const TransactionContext = createContext();

function NewTransactionManager({ children }) {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [transactionArray, setTransactionArray] = useState([]);


  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleReason(event) {
    setReason(event.target.value);
  }

  function handleTransaction(event) {
    event.preventDefault();

    if (!amount || !reason) return; // Prevent adding empty transactions

    const newTransaction = {
      Amount: amount,
      Reason: reason,
    };

    setTransactionArray((t) => [newTransaction, ...t]);

    // Reset state values, which will automatically clear the input fields
    setAmount("");
    setReason("");
  }

  function deleteTransactions(event) {
    event.preventDefault();
    setTransactionArray([]);
  }

  console.log(transactionArray, 'TransactionContext')


  return (
    <TransactionContext.Provider value={{ amount, reason, transactionArray,  setTransactionArray}}>
      {children}
      <div className="flex flex-col items-center justify-center w-3/4 max-w-3/4">
        <h3 className="text-center font-semibold text-xl pb-5">Add new transaction</h3>

        <form onSubmit={handleTransaction} className="w-3/4 max-w-[75%] flex flex-col gap-2">
          <label className="block font-semibold">Enter Transaction</label>

          <input
            id="transaction"
            onChange={handleReason}
             value={reason}
            className="block w-full p-2 border-box focus:outline-none focus:ring-1 ring-pink-500 focus:rounded-sm transition-all ease-out duration-100"
            type="text"
            placeholder="Enter Reason"
          />

          <label className="block font-semibold">
            Amount <span>(negative - expense, positive - income)</span>
          </label>

          <input
            id="amount"
            onChange={handleAmount}
            value={amount}
            className="block w-full p-2 border-box border-black outline-none focus:rounded-sm transition-all ease-out duration-100"
            type="text"
            placeholder="Enter amount (i.e +500 or -500)"
          />

          <button className="bg-pink-500 ring-1 ring-black rounded-md hover:bg-pink-600 py-3 box-border font-semibold" type="submit">
            Add Transaction
          </button>
          <button onClick={deleteTransactions} className="bg-pink-500 ring-1 ring-black rounded-md hover:bg-pink-600 py-3 box-border font-semibold" type="button">
            Delete All Transactions
          </button>
        </form>
      </div>
    </TransactionContext.Provider>
  );
}

export default NewTransactionManager;
