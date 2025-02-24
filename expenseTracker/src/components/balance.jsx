import { useContext } from "react"
import { HistoryContext } from "./history"
import { useState, useEffect } from "react"


function BalanceManager (){

    const {expenseArr, incomeArr}  = useContext (HistoryContext)

    const [incomeTotal, setIncomeTotal] = useState('00')
    const [expenseTotal, setExpenseTotal] = useState('00')
    const [totalBalance, setBalance] = useState('00')

    useEffect(() => {
        setIncomeTotal(
            incomeArr.reduce((acc,element) => {
                return acc + element
            },0)
        )
    },[incomeArr])

    useEffect(()=> {
        setExpenseTotal(
            expenseArr.reduce((acc,element) => (
                acc + element
            ),0)
        )
    },[expenseArr])

    useEffect(()=> {
        setBalance(incomeTotal + expenseTotal)
    },[incomeTotal, expenseTotal])

    

    function balanceRender(sum){
        if(sum === 0){
            return <p className="font-bold text-xl text-gray-500 ">{totalBalance.toLocaleString()}</p>
        }
        if(sum > 0){
            return <p className="font-bold text-xl text-green-500 underline">{totalBalance.toLocaleString()}</p>
        }else{
            return <p className="font-bold text-xl text-red-500 underline">{totalBalance.toLocaleString()}</p>
        }
    }

    return (
        <div className=" min-w-[75%] max-w-[75%]"> 
            <div className="h-20">
                <h2 className="text-3xl font-semibold">Your Balance</h2>
                {balanceRender(totalBalance)}
            </div>

            {/* Container */}
            <div className="bg-white flex rounded-sm">
                <div className=" w-1/2 border-r-2 border-r-pink-500 text-center h-16 flex flex-col justify-center">
                    <h3 className="font-semibold">Income</h3>
                    <p className="font-bold text-green-500">{incomeTotal.toLocaleString()}</p>
                </div>
                <div className=" w-1/2 text-center flex flex-col justify-center">
                    <h3 className="font-semibold">Expense</h3>
                    <p className="text-red-500 font-bold">{expenseTotal.toLocaleString()}</p>
                </div>
            </div>
        </div>
        
    )
}

export default BalanceManager