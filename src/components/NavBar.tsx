import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../main.css'

import * as HoverCard from '@radix-ui/react-hover-card'

import {MdOutlineSearch} from 'react-icons/md'

import Hamburguer from 'hamburger-react'

const NavBar = () => {

    const[isActive, setIsActive] = useState(false) //to setup classes

    const handleToggle = () =>{
      setIsActive(!isActive)
    }

  return (
    <header>
      <nav className='flex justify-between items-center bg-form w-screen shadow-2xl h-[7vh] md:height-[8vh] text-zinc-800'>
        <Link to='/home' className='border-solid border-2 border-zinc-800 p-2 text-[1rem] font-bold m-8'>
          PypeStore
        </Link>

        <div onClick={handleToggle} className='hamburguer hidden'>
          <Hamburguer 
            toggled={isActive} 
            toggle={setIsActive}
            size={20}
            rounded={true}
          />
        </div>

        <ul className={`flex list-none font-bold ${isActive ? 'nav-list' : 'nav-list-not-visible'}`}>
        <Link to='/home'>
          <li className='ml-8 text-[.9rem]'>
            Home
          </li>
        </Link>
        <HoverCard.Root openDelay={10} closeDelay={10}>
          <HoverCard.Trigger>
            <Link to='/home'>
              <li className='ml-8 text-[.9rem]'>
                Products
              </li>
            </Link>
          </HoverCard.Trigger>
          <HoverCard.Portal>
              <HoverCard.Content className='hovercard-content'>
                <div className='h-[200px] w-[130px] flex flex-col items-center justify-center 
                                bg-form shadow-xl mr-12'>
                  <Link to='/formen' className='font-bold text-[.9rem] underline m-3
                          hover:bg-zinc-200 flex items-center justify-center w-[110px] h-[50px]'>Men</Link>
                  <Link to='/forwomen' className='font-bold text-[.9rem] underline m-3 
                          hover:bg-zinc-200 flex items-center justify-center w-[110px] h-[50px]'>Women</Link>
                </div>
              </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
        <Link to='/support'>
          <li className='ml-8 text-[.9rem]'>
            Contact Us
          </li>
        </Link>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar