import React, { useEffect, useState } from 'react'
import { MasterClassesCard } from './MasterClassesCard'
import axios from 'axios';

import Img2 from '../assets/images/2.jpg'
import Img3 from '../assets/images/3.jpg'
import { Modal } from './Modal';

const SPREADSHEET_ID = '1YKbGN1Z2dMGLtSmSjJHU73KgRcipa-6gupXmqcxDrj0';
const API_KEY = 'AIzaSyDDPN8zuhdJw_GsdR-dw53cqEQZyaDLv-M';
const RANGE = 'Описания МК!A3:F35';

export const fetchSpreadsheetData = async () => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await axios.get(url);

    const rows = response.data.values.slice(1); 

    return Promise.all(
        rows.map(async ([id, title, author, description, materials, photo]) => {
            let imageUrl = photo
            return {
                id,
                title,
                author,
                description,
                materials,
                imageUrl,
            }
        })
    )
};


export const MasterClasses = () => {
    const [classes, setClasses] = useState([]);

    const [modalData, setModalData] = useState({ isOpen: false, title: '', description: '', photo: '', author: '' });

    const handleCardClick = (data) => {
        setModalData({ isOpen: true, title: data.title, description: data.description, photo: data.photo, author: data.author });
    };

    const handleCloseModal = () => {
        setModalData({ ...modalData, isOpen: false });
        console.log(modalData)
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchSpreadsheetData();
                console.log(data);
                setClasses(data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        loadData();
    }, []);
    
    let classesColumns2 = [[], []];
    let classesColumns3 = [[], [], []];
    let n = 0;
        
    for (let i = 0; i < classes.length; i++) {
        if (i%2==0){
            classesColumns2[0].push(classes[i])
        } else {
            classesColumns2[1].push(classes[i])
        }
    }
    

    for (let i = 0; i < classes.length; i++) {
        classesColumns3[n].push(classes[i]);
        if (n < 2) {
            n++;
        } else {
            n = 0;
        }
    }
    

    const [screenSize, setScreenSize] = useState('xs');
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
            setScreenSize('xs');
        } else if (640 <= window.innerWidth && window.innerWidth < 1024) {
            setScreenSize('sm');
        } else {
            setScreenSize('lg');
        }
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize); 
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    let displayedColumns = screenSize === 'xs' ? [classes] : (screenSize === 'sm' ? classesColumns2 : classesColumns3);

    return (
        <section id='master-classes' className="bg-black py-12">
            <div className="max-w-screen-xs-container sm:max-w-screen-sm mx-auto lg:max-w-screen-lg">
                <h2 className="font-black text-3xl text-white leading-normal text-center">
                    Популярные мастер-классы ФИТ
                </h2>
                <div className='flex flex-row justify-between items-start'>
                {displayedColumns.map((classesColumn) => (
                    <ul className="flex flex-col gap-6 mt-6 ">
                        {classesColumn.map((item) => (
                            <li>
                                <MasterClassesCard
                                    key={item.id}
                                    title={item.title}
                                    author={item.author}
                                    description={item.description}
                                    materials={item.materials}
                                    photo={item.imageUrl}
                                    onCardClick={handleCardClick}
                                />
                            </li>
                        ))}
                    </ul>
                ))}
                </div>
            </div>
            <Modal
                isOpen={modalData.isOpen}
                onClose={handleCloseModal}
                title={modalData.title}
                description={modalData.description}
                photo={modalData.photo}
                author={modalData.author}
            />
        </section>
  )
}
