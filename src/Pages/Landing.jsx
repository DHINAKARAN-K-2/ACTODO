import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"
function Landing()
{
    const data=useLocation()
    return(
        <div className="bg-black p-8 md:p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={data.state.euser}/>
        <div className="flex justify-between md:p-10 gap-7 flex-wrap my-5 ">
          <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Hosur"} />
          <Card bgcolor={"#FD6663"} title={"September"} subtitle={"18:55:55"} />
          <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
        </div>
        <TodoContainer />
      </div>



    </div>
    )

}
export default Landing