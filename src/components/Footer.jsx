import React from 'react'
import { Button } from './ui/Button'
import Logo from '../assets/images/logo.png'

export const Footer = () => {
  return (
    <footer className='bg-secondary py-12 mx-auto'>
        <div className='mx-auto flex flex-col items-center gap-4
        max-w-screen-sm 
        lg:max-w-screen-lg'>
            <h2 className='font-semibold text-md text-white'>Подпишитесь на наши обновления!</h2>
            <form action='#'>
              {/* <label htmlFor="email" className='text-text2 absolute py-2' >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.58142 3.96997L9.99999 10.7143L17.4178 3.97068" stroke="#F3F4F6" stroke-width="1.71429" stroke-miterlimit="10"/>
                  <path d="M16.4285 3.57141L3.57139 3.57141C2.78242 3.57141 2.14282 4.211 2.14282 4.99998L2.14282 15C2.14282 15.789 2.78242 16.4286 3.57139 16.4286L16.4285 16.4286C17.2175 16.4286 17.8571 15.789 17.8571 15L17.8571 4.99998C17.8571 4.211 17.2175 3.57141 16.4285 3.57141Z" stroke="#F3F4F6" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
              </label> */}
              <input required type="email" name="email" id="email" placeholder='Ваша почта' className='relative text-accent rounded-l-full placeholder:text-text2 bg-transparent border-[#565E6C] py-2 px-4 border'/>
              <button type='submit' className='py-2 px-4 rounded-r-full bg-accent border border-accent text-white'>Подписаться</button>
            </form>
            <div className='flex flex-row items-center justify-between w-full'>
              <a href="#">
                  <img src={Logo} alt="Logo" className='max-w-12'/>
              </a>
              <nav className='flex flex-col text-end text-sm'>
                  <a className='text-accent' href="#">Главная</a>
                  <a className='text-text2' href="#">Мастер-классы</a>
              </nav>
            </div>
            {/* <hr className='w-full border-[.025rem] border-text2'/> */}
            <div className='flex flex-row items-center text-text2 text-sm'>
              © 2025 Мосполитех 
            </div>
        </div>
    </footer>
  )
}
