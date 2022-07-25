import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='bg-slate-800 text-white flex items-center justify-center h-16 border-1 border-black'  >
    <ul className='flex w-full justify-around p-4 gap-6 font-bold   '>
      <li>
        REACT APPS
      </li>
      <li>
      <Link to="/">Space News</Link>
      </li>
      <li>
        <Link to="hero">Hero App</Link>
      </li>
      <li>
      <Link to="todo">Todo App</Link>
      </li>
     
      <li>
      <Link to="gameapi">Game App</Link>
      </li>
    </ul>
  </nav>
  <Outlet/>
  <div className='text-2xl bg-slate-800 font-bold text-sky-100 text-center font-mono  p-2 border-1 border-black '>	&#169;codeDamnProjects2022</div>
  </>
  )
}

export default Nav