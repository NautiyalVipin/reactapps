import React, { useEffect, useState } from 'react'
import useSWR from "swr"
 



const Game = () => {
  const [value,setValue] = useState("")
  const [data,setData] = useState([])
  const [deals,setDeals] = useState([])
  const fetcher = (...args)=>{fetch(...args).then(res=>res.json()).then(data=>setDeals(data))}

const {resdata,error} = useSWR(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=3`,fetcher)




useEffect(()=>{
    const fetchdata =()=> fetch(`https://www.cheapshark.com/api/1.0/games?title=${value}&limit=3`).then(res=>res.json()).then(data=>setData(data))
    fetchdata()

},[value])


    return (
    <div className=" overflow-y-auto bg-slate-400 h-screen flex items-center  flex-col">
                    <input className='w-80 fixed z-10 focus:outline-none focus:ring focus:border-black  p-2 text-xl  rounded-xl m-4'
                        type="text"
                        placeholder="Search for a game"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
    <div className='w-screen flex gap-2 m-auto justify-center mt-20 h-96 flex-wrap flex-auto'>
    {data?.map(e=>{
        return (<div className=" p-2 w-60 border  border-gray-400 hover:translate bg-slate-800 text-white rounded-lg">
        <div className="">
            <img src={e.thumb} alt="img"/>
            <h3 className="text-lg m-2 font-bold capitalize">{e.external}</h3>
          
        </div>
    </div>)
    })}
    
</div>
{/* <div className="bg-slate-800  mt-2  w-full py-px font-thin "></div> */}
<div className="  h-full  py-px m-4 font-bold text-3xl text-center ">
    <h1 className='m-3'>DEALS!</h1>
    <div className='w-screen h-60 justify-center flex gap-10 m-auto  flex-auto'>
    {deals && deals.map(e=>{
        return (<div className=" p-2 w-60 border text-lg font-thin  border-gray-400 hover:translate bg-slate-800 text-white rounded-lg">
        <div className="">
            <img src={e.thumb} className="w-52 m-auto h-24" alt="img"/>
            <p>Sale Price: {e.salePrice}</p>
            <p>Price:{e.normalPrice}</p>
            <p>Savings:  {Math.ceil(e.savings)}%</p>
            <h3 className="text-lg m-2 font-bold capitalize">{e.title}</h3>
          
        </div>  
    </div>)
    })}
    
</div>
</div>

    </div>
  )
}

export default Game