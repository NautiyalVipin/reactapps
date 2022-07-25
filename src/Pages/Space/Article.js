import React, { useState } from "react"
import ClickAwayListener from 'react-click-away-listener';
const Article = (props) => {
    const [value, setValue] = useState(false)

    const LargeDiv = () => {
        return (<ClickAwayListener onClickAway={()=>setValue(e=>!e)}>
            <div className="fixed overflow-y-auto  top-20 inset-x-9 p-4 w-600 h-5/6 border border-gray-800 z-10 bg-slate-800 rounded-3xl text-white">
           
                <button onClickAway={()=>alert("Click away works")} onClick={() => setValue(e => !e)} className=" rounded-full bg-gray-200 w-16 text-black absolute right-0 top-0 m-2 p-1">X</button>
            <div className="flex flex-col">
            <img className="w-2/5 rounded-lg self-center" src={props.imageUrl} alt="img" width="cover"/>
                <h3 className="text-2xl  m-2 font-bold capitalize">{props.id}: {props.title}</h3>
                <p className="font-light text-xl p-10">{props.summary}
                <a target="_blank" href={props.url} type="button" className= "mb-0 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center self-baseline dark:focus:ring-[#3b5998]/55 mr-2  ">Full Story</a></p>
            </div>
        </div>
         </ClickAwayListener>)
    }


    if (value) return <LargeDiv />
    return <div onClick={() => setValue(true)} className="flex-auto p-4 w-60 bg-blue-100 border border-gray-400 hover:translate  hover:bg-slate-800 hover:text-white rounded-lg">
        <div className="">
            <img src={props.imageUrl} alt="img"/>
            <h3 className="text-xl m-2 font-bold capitalize">{props.id}: {props.title}</h3>
          
        </div>
    </div>

}


export default Article