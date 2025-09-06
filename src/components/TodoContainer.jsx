import { useState } from "react"
import Addtodoform from "./Addtodoform"
import Addtodolist from "./Addtodolist"
function TodoContainer() {
    const [alist,setalist]=useState([{id:1,activity:"Go for a Walk"},{id:2,activity:"Wake up 8:30"}])
    return (

        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform alist={alist} setalist={setalist}/>
                <Addtodolist alist={alist} setalist={setalist}/>
            </div>

        </div>

    )
}
export default TodoContainer