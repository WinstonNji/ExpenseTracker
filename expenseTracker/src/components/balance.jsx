function BalanceManager (){
    return (
        <div className=" min-w-[75%] max-w-[75%]"> 
            <div className="h-16">
                <h2 className="text-2xl font-semibold">Your Balance</h2>
                <p className="font-bold">00.00</p>
            </div>

            {/* Container */}
            <div className="bg-white flex rounded-sm">
                <div className=" w-1/2 border-r-2 border-r-pink-500 text-center h-16 flex flex-col justify-center">
                    <h3 className="font-semibold">Income</h3>
                    <p>00.00</p>
                </div>
                <div className=" w-1/2 text-center flex flex-col justify-center">
                    <h3 className="font-semibold">Expense</h3>
                    <p>00.00</p>
                </div>
            </div>
        </div>
        
    )
}

export default BalanceManager