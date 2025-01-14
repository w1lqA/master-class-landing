import React from 'react'
import Main from '../assets/images/main.png'
import { Button } from './ui/Button'

export const MainSection = () => {
  return (
    <section className='text-center w-full relative'>
      <div className='backdrop-filter backdrop-blur-xl bg-secondary bg-opacity-50 '>
        <div className='gap-8 flex flex-col items-center mx-auto pb-12 sm:pt-6 
        max-w-screen-xs-container
        sm:max-w-screen-sm
        '>
          <h1 className='font-black text-3xl sm:text-4xl text-white leading-normal'>РАСШИРЬТЕ СВОЙ КРУГОЗОР 
            С МАСТЕР-КЛАССАМИ ПОЛИТЕХА
          </h1>
          <p className='text-text sm:text-lg'> 
            Применяйте новые знания в учебе, работе или своих проектах — начните развивать цифровое будущее вместе с нами!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 w-full font-normal text-sm sm:text-md justify-center px-6'>
            <Button styles='py-4 border-accent text-white bg-accent px-12 hover:border-white hover:bg-white hover:text-accent duration-300 transition-all ease' text='Записаться!'/>
            <Button styles='py-4 border-accent text-accent bg-transparent px-12 hover:bg-accent hover:text-white duration-300 transition-all ease' text='О нас'/>
          </div>

        </div>
        <div className='mx-auto sm:mt-6 
            max-w-screen-xs-container
            xs:max-w-screen-sm
            sm:max-w-screen-lg overflow-hidden'>
          <video src={Main} autoPlay loop muted className='bg-black object-cover max-h-96 w-full' aria-hidden draggable={false}/>
        </div>
    </div>
  </section>
  )
}