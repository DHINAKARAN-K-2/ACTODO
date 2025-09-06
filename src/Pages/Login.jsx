import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props)
{
    var navigate=useNavigate()
    const [euser,seteuser]=useState()
    const [epass,setepass]=useState()
    const[ruser,setruser]=useState(true)
    const users=props.users
    
    function checkUser()
    {
        var userfound=false
        users.forEach(function(item)
    {
        if(item.username === euser && item.password === epass )
        {
            console.log("login sucess")
            userfound=true
            navigate("/landing",{state:{euser}})
        }
    })
    if(userfound===false)
    {
        setruser(false)
    }

    }
    function handleUinput(event)
    {
        seteuser(event.target.value)

    }
    function handleUpass(event)
    {
        setepass(event.target.value)

    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium ">Hey Hi..!</h1>
                {ruser?<p>I Help you Manage Your Activities After you SignUp Here :)</p>:<p className="text-red-600">Please SignUp Before you Login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black bg-transparent p-1 border rounded-sm" 
                    placeholder="Enter Username"
                    onChange={handleUinput}
                    />

                     <input type="text" 
                    className="w-52 border-black bg-transparent p-1 border rounded-sm" 
                    placeholder="Enter Password"
                    onChange={handleUpass}
                    />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't Haven an Account?<Link to={"/SignUp"} className="underline"> SignUp </Link></p>
                </div>
            </div>
        </div>
    )

}
export default Login