import { Children } from "react"
import { createContext } from "react"
import { useState } from "react"

export const TransactionContext = createContext()

function NewTransactionManager ({children}){

    const [amount, setAmount] = useState ('+/-')

    const [reason, setReason] = useState('Enter new transaction')

    function handleReason(){

    }

    return (        
        <TransactionContext.Provider>
            {children}
            <div className="flex flex-col items-center justify-center w-3/4 max-w-3/4">
                <h3 className="text-center font-semibold text-xl pb-5">Add new transaction</h3>

                <form className="w-3/4 max-w-[75%] flex flex-col gap-2" action="">
                    <label className="block font-semibold"  htmlFor="">Enter Transaction</label>
                    <input onChange={handleReason} className="block w-full p-2 border-box focus:outline-none focus:ring-1 ring-pink-500 focus:rounded-sm transition-all ease-out duration-100" type="text" placeholder="Enter Reason"/>

                    <label className="block font-semibold" htmlFor="">Amount <span>(negative - expense, positive - income)</span></label>
                    <input className="block w-full p-2 border-box focus:outline-none focus:ring-1 ring-pink-500 focus:rounded-sm transition-all ease-out duration-100" type="text" placeholder="Enter amount (i.e +500 or - 500"/>

                    <button className="bg-pink-500 ring-1 ring-black rounded-md hover:bg-pink-600 py-3 box-border font-semibold" type="submit">Add Transaction</button>
                </form>
            </div>
        </TransactionContext.Provider>
        
    )
}

export default NewTransactionManager