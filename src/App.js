import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Landing from "./Pages/Landing";
import { useState } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App()
{
  const[users,setusers]=useState([{username:"Dhina",password:"123"}])
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
      <Route path="/SignUp" element={<SignUp  users={users} setusers={setusers}/>} ></Route>
      <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )

}

export default App;
