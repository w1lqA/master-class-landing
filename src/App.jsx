import React, { useEffect, useState } from 'react';

// Константы для работы с Google Sheets
const SHEET_ID = '1YKbGN1Z2dMGLtSmSjJHU73KgRcipa-6gupXmqcxDrj0'; // ID вашей таблицы
const API_KEY = 'AIzaSyD75H7ytQEOn3wdUAH1CA-sW43dxyWGNew'; // Ваш API-ключ
const SHEET_NAME = 'Copy of Описание мастер-классов ФИТ'; // Имя листа с данными

const App = () => {
  const [masterclasses, setMasterclasses] = useState([]);

  useEffect(() => {
    const fetchMasterclasses = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        const data = await response.json();

        // Преобразование данных из таблицы в подходящий формат
        if (data.values) {
          const headers = data.values[0];
          const rows = data.values.slice(1);
          const formattedData = rows.map((row) => {
            const rowData = {};
            headers.forEach((header, index) => {
              rowData[header] = row[index];
            });
            return {
              id: rowData.id || Math.random(), // Добавьте уникальный ID
              title: rowData.title,
              author: rowData.author,
              description: rowData.description,
              materials: rowData.materials,
              image: rowData.image, // URL изображения из таблицы
            };
          });
          setMasterclasses(formattedData);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchMasterclasses();
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 text-gray">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Мастерклассы</h1>
          <p className="mt-2 text-lg">Узнайте о ближайших мастер-классах уже сейчас!</p>
        </div>
      </header>

      {/* Masterclass Cards Section */}
      <main className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masterclasses.map((mc) => (
            <div
              key={mc.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={mc.image}
                alt={mc.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{mc.title}</h2>
                <p className="text-gray-700 text-sm mb-1">Автор: {mc.author}</p>
                <p className="text-gray-600 text-sm mb-3">{mc.description}</p>
                <p className="text-gray-500 text-xs">Материалы: {mc.materials}</p>
              </div>
              <div className="p-4 border-t text-center">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10 bottom-0">
        <div className="container mx-auto text-center">
          <p>© 2024 Информационный портал мастер-классов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;