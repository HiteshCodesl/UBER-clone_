import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import {CaptainDataContext} from "../context/CaptainContext"
import axios from "axios";


function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e)=>{
   e.preventDefault();
 const captain = {
  email: email,
  password
}
 const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

 if(response.status === 200){
  const data = response.data;
 
   setCaptain(data.captain)
   localStorage.setItem('token', data.token)
    navigate("/captain-home")
  }

  setEmail('');
  setPassword('');
}
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-14 mb-5" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">Whats your email</h3>

          <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"  value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}
           required type="email" placeholder="email@gmail.com" />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full" required value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} 
          type="password" placeholder="password" />

          <button className="bg-[#111] text-white font-semi rounded px-4 py-2 mt-5  w-full"
          >Login</button>

          <p className="text-center mt-2"> New User?  <Link className="text-blue-600" to={"/captain-signup"}>Create new Account</Link></p>
        </form>
      </div>

    </div>
  )
}

export default CaptainLogin
