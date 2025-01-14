import React from 'react'
import Logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <header className="text-white px-4 xs:px-8 sm:px-0 mx-auto py-6 flex flex-row items-center justify-between 
        max-w-screen-sm 
        lg:max-w-screen-lg
        ">
        <a href="#">
            <img src={Logo} alt="Logo" className='max-w-12'/>
        </a>
        <nav className='flex flex-col text-end text-sm lg:flex-row lg:text-center lg:space-x-3'>
            <a className='text-accent lg:p-3 lg:border-b-2 lg:border-accent ' href="#">Главная</a>
            <a className='text-text2 lg:p-3' href="#">Мастер-классы</a>
        </nav>
    </header>
  )
}
