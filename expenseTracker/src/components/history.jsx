import { useContext, useEffect, useState, createContext } from "react"
import { TransactionContext } from "./newTransaction"


export const HistoryContext = createContext()
function HistoryManager ({children}){

    const [displayReason, setReason] = useState('Enter a new transaction')
    const [displayAmount, setAmount] = useState('+/-')
    const {amount, reason, transactionArray, setTransactionArray} = useContext(TransactionContext)
    const [newTransactionArr, setNewTransactionArr] = useState([])
    const [expenseArr, setExpenseArr] = useState([]);
    const [incomeArr, setIncomeArr] = useState([]);


    useEffect(()=>{
        if(reason === ""){
            setReason('Enter a new transaction')
        }else{
            setReason(reason)
        }
    },[reason])

    useEffect(()=> {
        setNewTransactionArr(transactionArray)
        respectiveArr(transactionArray)
    },[transactionArray])

    useEffect(()=> {
        if(amount === ""){
            setAmount("+/-")
        }else{
            setAmount(amount)
        }
    },[amount])

    
    function transactionType(amount) {

        const numAmount = Number(amount); // Convert to number

    
        if (isNaN(numAmount)) {
            if(amount.charAt(0) === '+' && amount.charAt(1) === '/'){
                return <span className="block font-bold border-l-4 border-gray-500 pl-2">{amount}</span>; // Show original text if conversion fails
            }

            if (amount.charAt(0) === '-') {
                
                return <span className="block font-bold border-l-4 border-red-500 pl-2">{amount}</span>;
            }else if (amount.charAt(0) === '+') {
                return <span className="block font-bold border-l-4 border-green-500 pl-2">{amount}</span>;
            }
        }
    
        if (amount.charAt(0) === '-') {
            return <span className="block font-bold border-l-4 border-red-500 pl-2">{numAmount.toLocaleString()}</span>;
        } else if (amount.charAt(0) === '+') {
            return <span className="block font-bold border-l-4 border-green-500 pl-2">{numAmount.toLocaleString()}</span>;
        }
    
        
    }

    const expenses = []
    const income = []

    function respectiveArr(TransactionsArr){

        TransactionsArr.forEach((transaction,i) => {
            if(transaction.Amount.startsWith('-')){
                expenses.push(Number(transaction.Amount))
            }else if(transaction.Amount.startsWith('+')){
                income.push(Number(transaction.Amount))
            }
        })

        setExpenseArr(expenses);
        setIncomeArr(income);
    }

    
    function removeTransaction(index){
        setNewTransactionArr (arr => {
            const updatedOriginalArr = arr.filter((_,i) => i !== index)
            setTransactionArray(updatedOriginalArr)
            return updatedOriginalArr
        })
    }

    console.log(newTransactionArr, 'newTransactionArr After')

    

    console.log(expenseArr, 'expenseArray')


    return (
        <HistoryContext.Provider value={{expenseArr,incomeArr}}>
            {children}
            <div className="w-3/4">
                <h3 className="text-center font-semibold text-xl pb-5">History</h3>

                <ul className="flex flex-col gap-3 max-h-24 overflow-y-auto">

                    <li className="flex justify-between bg-white p-2">
                        <span className="block font-semibold">{displayReason}</span>
                        {transactionType(displayAmount.toLocaleString())}
                        
                    </li>

                    {newTransactionArr.map((transaction,index) => (
                        <li key={index} className="flex  bg-white p-2">
                            <span className="block font-semibold flex-1">{transaction.Reason}</span>

                            <span className="pr-2">
                                {transactionType(transaction.Amount)}
                            </span>

                            <button onClick={() => removeTransaction(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="27px" fill="#DB2777"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                            </button>
                        </li>
                    ))}
                    
                    
                </ul>
            </div>
        </HistoryContext.Provider>
        
    )
}

export default HistoryManager