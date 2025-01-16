import React from 'react'
import Logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <header id='main' className="text-white w-full ">
        <div className='relative max-w-screen-sm flex flex-row items-center justify-between px-4 xs:px-8 sm:px-0 mx-auto py-6 
        lg:max-w-screen-lg xl:max-w-screen-xl'>
          
          <div className='absolute -z-20 end-4 py-12 px-32 bg-accent/10 rounded-3xl blur-3xl'></div>
          <div className='absolute -z-20 -start-24 -top-6 py-16 px-32 bg-accent/10 rounded-3xl rotate-[135deg] blur-3xl'></div>
          
          <a href="#" className='relative hover:rotate-45'>
              <img src={Logo} alt="Logo" className='max-w-16'/>
          </a>
          <nav className='flex flex-col text-end text-sm lg:flex-row lg:text-center lg:space-x-3'>
              <a className='text-accent lg:p-3 lg:border-b-2 lg:border-accent ' href="#main">Главная</a>
              <a className='text-text2 lg:p-3' href="#master-classes">Мастер-классы</a>
          </nav>
        </div>
    </header>
  )
}
