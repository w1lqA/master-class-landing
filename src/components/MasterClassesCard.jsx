import React from 'react';
import { Button } from './ui/Button';

export const MasterClassesCard = ({ key, title, author, description, photo, styles, onCardClick }) => {
    return (
        <button onClick={() => onCardClick({ title, description, photo, author }) } className={`flex flex-col jus shadow-accent/15 hover:bg-secondary/90 duration-300 transition-all ease shadow-2xl justify-end items-stretch text-start bg-secondary p-4 gap-2 rounded-sm w-full sm:max-w-screen-xs-container group lg:max-w-screen-xs`}>
            <h3 className="text-xl text-white self-start mb-auto">{title}</h3>
            <p className={`text-sm text-text2 ${author != '' ? 'flex' : 'hidden'}`}>{author}</p>
            <div className={`rounded-sm overflow-hidden h-full bg-black`}>
                <img
                    src={photo}
                    className={`object-cover scale-110 brightness-75 group-hover:brightness-100 group-hover:scale-100 lg:max-h-48 w-full min-h-48 transition-all duration-500 `}
                    onError={(e) => console.error('Error loading image:', e.target.src)}
                    onLoad={() => console.log('Image loaded:', photo)}
                />
            </div>
            {/* <p className="text-sm text-text2 mb-2">{description}</p> */}
            <div className='border inline-flex justify-center rounded-sm py-3 border-accent text-accent bg-transparent mt-3 group-hover:bg-accent group-hover:text-white duration-500 transition-all ease'>
                Подробнее
            </div>
        </button>
    );
};
