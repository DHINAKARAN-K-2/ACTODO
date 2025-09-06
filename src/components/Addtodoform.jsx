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
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input className="border border-black bg-transparent" placeholder="Next Activity" type="text" value={newalist} onChange={handleChange} />
                    <button onClick={handleAdd} className="bg-black text-white mx-2 px-1 border border-black">ADD</button>
                </div>
            </div>
        </div>
    )

}
export default Addtodoform