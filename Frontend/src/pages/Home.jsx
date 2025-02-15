
import {Link } from "react-router-dom"
function Home() {
  return (
    <div>
         <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhZmZpYyUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full ">
         <img className="w-20 ml-8 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className="bg-white py-4 pb-7 px-4">
              <h2 className="text-3xl p-3 font-bold">Get started with uber</h2>
              <Link to={"/login"} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
        </div>
      </div>

    </div>
  )
}

export default Home
