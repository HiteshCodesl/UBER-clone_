import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserContext";
import axios from "axios"

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate(); 

  const submitHandler = async(e)=>{
   e.preventDefault();
   const userData = {
    email: email,
    password: password
   }

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
   
if(response.status === 200){
  const data = response.data
  setUser(data.user)
  localStorage.setItem('token', data.token)
  navigate("/home")
}
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-12 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

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

          <p className="text-center mt-2"> New User?  <Link className="text-blue-600" to={"/signup"}>Create new Account</Link></p>
        </form>
      </div>

      <div>
        <Link to={"/captain-login"}className="bg-[#10b461] flex w-full text-white justify-center font-semi rounded px-auto py-2 my-5">Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
