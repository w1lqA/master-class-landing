import React, { useEffect, useState } from 'react';
import { MainSection } from './components/MainSection';
import { Header } from './components/Header';
import { MasterClasses } from './components/MasterClasses';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <div className="min-h-screen mx-auto text-gray relative">
      <div className='absolute animate-opacity -z-50 inset-0 mx-auto w-full max-w-screen-md  bg-accent/5 rounded-full blur-2xl'></div>
        <Header/>
        <main>
          <MainSection/>
          <MasterClasses/>
        </main>
        <Footer/>
    </div>
  );
};

export default App;