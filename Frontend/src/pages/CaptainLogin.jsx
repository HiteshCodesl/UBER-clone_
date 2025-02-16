import { Link } from "react-router-dom";
import { useState } from "react";

function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e)=>{
   e.preventDefault();
   setUserData({
    email: email,
    password: password
   })
   console.log(userData)
    setEmail("");
    setPassword("");
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
