import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
function SignUp(props)
{
    var navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers
    const [euser,seteuser]=useState()
    const [epass,setepass]=useState()

    function handleUinput(event)
    {
        seteuser(event.target.value)

    }
    function handleUpass(event)
    {
        setepass(event.target.value)

    }
    function addUser()
    {
        setusers([...users,{username:euser,password:epass}])
        navigate("/")
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium ">Hey Hi..!</h1>
                <p>I Help you Manage Your Activities After you Login :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black bg-transparent p-1 border rounded-sm" 
                    placeholder="Enter Username"
                    onChange={handleUinput}/>

                     <input type="text" 
                    className="w-52 border-black bg-transparent p-1 border rounded-sm" 
                    placeholder="Enter Password"
                    onChange={handleUpass}/>

                     <input type="text" 
                    className="w-52 border-black bg-transparent p-1 border rounded-sm" 
                    placeholder="Enter Confirm Password"/>
                    <button className="bg-[#8272DA] hover:bg-violet-500 w-24 p-1 rounded-md" onClick={addUser}>SignUp</button>
                    <p>Already Have an Account?<Link to={"/"} className="underline"> Login </Link></p>
                </div>
            </div>
        </div>
    )

}
export default SignUp