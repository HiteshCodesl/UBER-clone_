import axios from "axios"
import { useState, useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import {UserDataContext} from "../context/UserContext"

function UserSignup() {
       const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')
       const [firstname, setFirstname] = useState('')
       const [lastname, setLastname] = useState('')
       const [userData, setUserData] = useState({});

       const navigate = useNavigate();

       const {user, setUser} = useContext(UserDataContext)

       const submitHandler = async(e) =>{
          e.preventDefault();
          const newUser = {
            fullname: {
              firstname: firstname,
              lastname: lastname
            },
            email: email,
            password: password
          }
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

          if(response.status === 201){
            const data = response.data;
            console.log(data)
            setUser(data.user)
            
            localStorage.setItem('token', data.token)
          
            navigate('/home')
           
            
          }
          setFirstname('');
          setEmail('');
          setLastname('');
          setPassword('');
        
       }
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img className="w-12 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

          <form onSubmit={(e) =>{
            submitHandler(e)
          }}>

            <h3 className="text-base font-medium mb-2">Whats your name</h3>

        <div className="flex gap-4  " >
              <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                required type="text" placeholder="First name"  value={firstname}
                onChange={(e)=>{
                  setFirstname(e.target.value)
                }}/>

              <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                required type="text" placeholder="Last name" value={lastname} onChange={(e)=>{
                 setLastname(e.target.value) 
                }} />
        </div>

            <h3 className="text-base font-medium mt-4 mb-2">Whats your Email</h3>

            <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required type="email" placeholder="email@gmail.com" value={email} onChange={(e) =>{
                setEmail(e.target.value)
              }}/>

            <h3 className="text-base font-medium mt-5 mb-2">Enter Password</h3>

            <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full" required
              type="password" placeholder="password" value={password} onChange={(e) =>{
               setPassword( e.target.value)
              }} />

            <button className=" bg-[#111] text-white font-semi rounded px-4 py-2 mt-7  w-full"
            >Signup</button>

          </form>
          <p className="text-center mt-2"> Already have account?  <Link className="text-green-900" to={"/login"}>Login</Link></p>

        </div>
          <div>
            <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the Googles Privacy Policy and Terms of Service apply.
            </p>
          </div>
      </div>
    </div>
  )
}

export default UserSignup
