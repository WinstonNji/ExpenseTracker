

function HistoryManager (){

    

    return (
        <div className="w-3/4">
            <h3 className="text-center font-semibold text-xl pb-5">History</h3>

            <ul className="flex flex-col gap-3 max-h-24 overflow-y-auto">
                <li className="flex justify-between bg-white p-2">
                    <span className="block font-semibold">Cash</span>
                    <span className="block font-bold">+40000</span>
                </li>
                <li className="flex justify-between bg-white p-2">
                    <span className="block font-semibold">Cash</span>
                    <span className="block font-bold">+40000</span>
                </li>
            </ul>
        </div>
    )
}

export default HistoryManager