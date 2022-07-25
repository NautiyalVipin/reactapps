import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {
    useQuery,
  } from '@tanstack/react-query'
import Article from "./Article"


function Space() {
    const API_URL = "https://api.spaceflightnewsapi.net/v3/articles"
    const fetchQuery = async () => {
        const res = await fetch(API_URL)
        if (res.status === 200) 
        return await res.json()
        else return res.status(404)
    }

    const { data, isLoading, isError} = useQuery(["posts"], fetchQuery, { retry: false })
    return (
        <div className='text-center  bg-sky-800'>
            <div className='bg-slate-700  p-4 text-center font-mono relative rounded '>
                <div className='sticky top-0 border  border-gray-400  left-0 right-0 bg-blue-100 rounded-xl'>
                    <h1 className="text-3xl p-2 margin-2 font-bold">TOP 10 SPACEFLIGHT NEWS</h1>
                    
                </div>
                <div className='flex flex-wrap gap-4  p-10 rounded'>
                    {data?.id ? (<Article title={data.title} />) : isLoading ? (<div type="button" className="  rounded-2xl text-center w-full "> <ClipLoader color='black'></ClipLoader>

                    </div>) : isError ? (<div type="button" className=" bg-blue-200 text-2xl rounded-2xl text-center w-full "> Try Searching a different query!
                    </div>) : data?.map(e => {
                        return (<Article key={e.id} summary={e.summary} url={e.url} imageUrl={e.imageUrl} body={e.body} id={e.id} title={e.title} />) })}
                </div>
            </div>
           
        </div>
    )
}

export default Space

