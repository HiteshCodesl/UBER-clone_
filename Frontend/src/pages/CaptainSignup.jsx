import {useNavigate , Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CaptainDataContext } from "../context/CaptainContext"
import axios from "axios"

function CaptainSignup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async(e) =>{
     e.preventDefault();
    const captainData = {
       fullname: {
         firstname: firstname,
         lastname: lastname
        },
       email: email,
       password: password, 
       vehicle: {
         color: vehicleColor,
         plate: vehiclePlate,
         capacity: vehicleCapacity,
         vehicleType: vehicleType
       }
     }
  
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
     
console.log(" response fetched ");

     if(response.status === 201){
      const data = response.data;
      console.log(data)
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate("/captain-home")
     }
 
     setFirstname('');
     setEmail('');
     setLastname('');
     setPassword('');
     setVehicleColor('');
     setVehiclePlate('');
     setVehicleCapacity('');
     setVehicleType('');
  }
return (
<div>
 <div className="p-7 h-screen flex flex-col justify-between">
   <div>
     <img className="w-14 mb-2"  src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

     <form onSubmit={(e) =>{
       submitHandler(e)
     }}>

       <h3 className="text-lg font-medium mb-2">Whats your name</h3>

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

       <h3 className="text-lg font-medium mt-4 mb-2">Whats your Email</h3>

       <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
         required type="email" placeholder="email@gmail.com" value={email} onChange={(e) =>{
           setEmail(e.target.value)
         }}/>

       <h3 className="text-lg font-medium mt-5 mb-2">Enter Password</h3>

       <input className="bg-[#eeeeee] rounded px-4 py-2 border w-full" required
         type="password" placeholder="password" value={password} onChange={(e) =>{
          setPassword( e.target.value)
         }} />

     <h3  className="text-lg font-medium mt-5 mb-2">Enter vehicle details</h3>

     <div className="flex gap-4">  
     <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2" required
         type="text" placeholder="Vehicle Color" value={vehicleColor} onChange={(e) =>{
          setVehicleColor( e.target.value)
         }} />

      <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2" required
         type="text" placeholder="Vehicle plate" value={vehiclePlate} onChange={(e) =>{
          setVehiclePlate( e.target.value)
         }} />
     </div>  

     <div className="flex gap-4 my-2">
     <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2" required
         type="number" placeholder="Vehicle Capacity" value={vehicleCapacity} onChange={(e) =>{
          setVehicleCapacity( e.target.value)
         }} />

      <input className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2" required
         type="select" placeholder="Vehicle type" value={vehicleType} onChange={(e) =>{
          setVehicleType( e.target.value)
         }} />

     </div>
       <button className=" bg-[#111] text-white font-semi rounded px-4 py-2 mt-3  w-full"
       >Signup</button>

     </form>
     <p className="text-center mt-1"> Already have account?  <Link className="text-green-900" to={"/captain-login"}>Login</Link></p>

   </div>
     <div>
       <p className="text-[8px] leading-tight ">
       This site is protected by the <span className="underline">Googles Privacy Policy</span>  and Terms of Service apply.
       </p>
     </div>
 </div>
</div>
)
}

export default CaptainSignup
