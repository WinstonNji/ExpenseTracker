import { useContext, useEffect, useState } from "react"
import { TransactionContext } from "./newTransaction"


function HistoryManager (){

    const [displayReason, setReason] = useState('Enter a new transaction')
    const [displayAmount, setAmount] = useState('+/-')

    const {amount, reason, transactionArray} = useContext(TransactionContext)

    useEffect(()=>{
        if(reason === ""){
            setReason('Enter a new transaction')
        }else{
            setReason(reason)
        }
    },[reason])

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
    
        return <span className="block font-bold border-l-4 border-gray-500 pl-2">{numAmount.toLocaleString()}</span>;
    }
    

    return (
        <div className="w-3/4">
            <h3 className="text-center font-semibold text-xl pb-5">History</h3>

            <ul className="flex flex-col gap-3 max-h-24 overflow-y-auto">

                <li className="flex justify-between bg-white p-2">
                    <span className="block font-semibold">{displayReason}</span>
                    {transactionType(displayAmount.toLocaleString())}
                </li>

                {transactionArray.map((transaction,index) => (
                    <li key={index} className="flex justify-between bg-white p-2">
                    <span className="block font-semibold">{transaction.Reason}</span>
                    {transactionType(transaction.Amount)}
                    </li>

                ))}
                
                
            </ul>
        </div>
    )
}

export default HistoryManager