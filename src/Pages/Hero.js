import { useState } from "react";

function Hero() {
  const [name,setName] =useState("")
  const [superpower,setSuperpower] =useState("")
  const [age,setAge] =useState()
  const [height,setHeight] =useState("")
  const [display,setDisplay] = useState(false)
  const [button,setButton] = useState(false)
  
  const clickHandle = ()=>{
    setDisplay(e=>!e)
    setButton(e=>!e)
  }
  
  
  return (<>

   
    <div className="bg-slate-700 overflow-y-auto h-screen flex items-center uppercase gap-2 border-3 border-slate-600  flex-col ">
   
    <h1 className=" font-thin  text-sky-100 justify-center my-5 text-5xl">Build a Hero!</h1>
     <div className="flex flex-wrap justify-center items-center">
      <input className="p-2 bg-blue-100 rounded-xl m-4  outline-none ring-2" type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Name" />
      <input className="p-2  bg-blue-100 rounded-xl m-4 outline-none ring-2" type="text" onChange={(e)=>setSuperpower(e.target.value)} value={superpower} placeholder="Enter the Superpower" />
      <input className="p-2  bg-blue-100 rounded-xl m-4 outline-none ring-2" type="number" onChange={(e)=>setAge(e.target.value)}  value={age} placeholder="Enter the Age" />
      <input className="p-2  bg-blue-100 rounded-xl m-4 outline-none ring-2" type="text" onChange={(e)=>setHeight(e.target.value)} value={height} placeholder="Enter the Height" />
     
      </div>
      <button  type="button" onClick={clickHandle} className= "my-10 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
  {button? "HIDE HERO":"SHOW HERO"}</button>
  {display && <div className="my-10 bg-slate-900 rounded-2xl p-8 border-2 border-sky-700 text-sky-100 font-mono text-2xl font-light">
        
        <ul>
          <li>NAME: {name}</li>
          <li>SUPERPOWER: {superpower}</li>
          <li>AGE: {age}</li>
          <li>HEIGHT: {height}</li>
        </ul>
      </div>}

    
      </div>
      </>
  );
}

export default Hero;
