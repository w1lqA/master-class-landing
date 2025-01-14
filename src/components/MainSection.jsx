import React from 'react'
import Main from '../assets/images/main.mp4'
import { Button } from './ui/Button'

export const MainSection = () => {
  return (
    <section className='text-center w-full relative overflow-hidden'>
      <div className='relative mx-auto
          max-w-screen-xs-container
          xs:max-w-screen-sm
          sm:max-w-screen-lg 
          xl:max-w-screen-xl'>
        <div className='absolute -z-20 -start-24 py-16 px-40 -bottom-40 bg-accent/5 rounded-3xl rotate-[10deg] blur-3xl'></div>
        <div className='absolute -z-20 -end-32 py-20 px-40 -bottom-40 bg-accent/10 rounded-3xl rotate-[-10deg] blur-3xl'></div>
 
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
            <Button href={'#master-classes'} styles='py-4 border-none text-white bg-accent px-12 hover:border-white hover:bg-white hover:text-accent duration-300 transition-all ease' text='Записаться!'/>
            <Button href={'#'} styles='py-4 border-accent text-accent bg-transparent px-12 hover:bg-accent hover:text-white duration-300 transition-all ease' text='О нас'/>
          </div>

        </div>

        <div className='mx-auto overflow-hidden bg-accent opacity-100 saturate-50 sm:mb-12
            max-w-screen-xs-container
            xs:max-w-screen-sm '>
          <video src={Main} autoPlay loop muted className='bg-black scale-110 opacity-90 object-cover z-20 w-full' aria-hidden draggable={false}/>
        </div>

    </div>
  </section>
  )
}