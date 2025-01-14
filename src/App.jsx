import React, { useEffect, useState } from 'react';
import { MainSection } from './components/MainSection';
import { Header } from './components/Header';
import { MasterClasses } from './components/MasterClasses';
import { Footer } from './components/Footer';
// // Константы для работы с Google Sheets
// const SHEET_ID = '1YKbGN1Z2dMGLtSmSjJHU73KgRcipa-6gupXmqcxDrj0'; // ID вашей таблицы
// const API_KEY = 'AIzaSyD75H7ytQEOn3wdUAH1CA-sW43dxyWGNew'; // Ваш API-ключ
// const SHEET_NAME = 'Copy of Описание мастер-классов ФИТ'; // Имя листа с данными

const App = () => {

  return (
    <div className="min-h-screen mx-auto text-gray">
      <div className='backdrop-filter backdrop-blur-xl bg-secondary bg-opacity-90'>
        <Header/>
        <main>
          <MainSection/>
          <MasterClasses/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;