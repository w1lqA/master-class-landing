import React from 'react';
import { Button } from './ui/Button';

export const MasterClassesCard = ({ key, title, author, description, photo, styles }) => {
    return (
        <li className={`flex flex-col justify-end bg-secondary p-4 gap-2 rounded-sm w-full sm:max-w-screen-xs-container group lg:max-w-screen-xs`}>
            <h3 className="text-xl text-white self-start mb-auto">{title}</h3>
            <p className={`text-sm text-text2 ${author != '' ? 'flex' : 'hidden'}`}>{author}</p>
            <div className={`rounded-sm overflow-hidden h-full`}>
            <img
                src={photo}
                className={`object-cover lg:max-h-48 w-full min-h-48 bg-black scale-110 transition-all duration-300 group-hover:scale-100`}
                onError={(e) => console.error('Error loading image:', e.target.src)}
                onLoad={() => console.log('Image loaded:', photo)}
            />
            </div>
            {/* <p className="text-sm text-text2 mb-2">{description}</p> */}
            <Button
                styles="py-3 border-accent text-accent bg-transparent mt-3 hover:bg-accent hover:text-white duration-300 transition-all ease"
                text="Подробнее"
            />
        </li>
    );
};
