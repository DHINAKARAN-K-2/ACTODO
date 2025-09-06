import { useState } from "react"
import Todoitem from "./Todoitem"

function Addtodolist(props) {

     const alist=props.alist
     const setalist=props.setalist
    return (

           
            <div className="bg-[#BDB4EA] border rounded-md mt-3 p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1> 
                {
                    alist.length===0?<p>You Haven't Added any Activity yet</p>:""
                }
                {
                    alist.map(function(item,index)
                {
                    return <Todoitem activity={item.activity} id={item.id} index={index} alist={alist} setalist={setalist}/>
                })
                }
            </div>
        
    )

}
export default Addtodolist