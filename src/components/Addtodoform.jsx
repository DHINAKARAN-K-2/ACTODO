import { useState } from "react"
function Addtodoform(props) {
    const alist=props.alist
     const setalist=props.setalist
     const [newalist,setnewalist]=useState("")
     function handleChange(event)
     {
        setnewalist(event.target.value)
     }
     function handleAdd()
     {
        setalist([...alist,{id:alist.length+1,activity:newalist}])
        setnewalist("")
     }
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input className="border border-black p-1 bg-transparent" placeholder="Next Activity" type="text" value={newalist} onChange={handleChange} required/>
                    <button onClick={handleAdd} className="bg-gray-500 p-1 hover:bg-gray-700 text-white mx-2 px-1 border rounded-sm border-black">ADD</button>
                </div>
            </div>
        </div>
    )

}
export default Addtodoform