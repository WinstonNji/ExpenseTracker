import BalanceManager from "./components/balance"
import HistoryManager from "./components/history"
import NewTransactionManager from "./components/newTransaction"

function App() {

  return (
    <div className="flex flex-col justify-center items-center gap-5">

      <h1 className="text-4xl font-bold underline decoration-pink-600 text-center">Expense Tracker</h1>

        <NewTransactionManager>
            <HistoryManager>
              <BalanceManager/>
            </HistoryManager>
        </NewTransactionManager>

    </div>
    
  )
}

export default App

