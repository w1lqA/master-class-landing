import React from 'react';

export const Modal = ({ isOpen, onClose, title, description, photo, author }) => {
  if (!isOpen) return null;

  return (
    <button onClick={onClose} className="text-start fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="p-6 bg-white rounded-sm max-w-screen-lg w-full mx-4 shadow-lg z-50 overflow-hidden flex flex-col sm:flex-row items-stretch sm:gap-6 max-h-fit">
        <div className="flex flex-col justify-start sm:basis-1/2 order-2">
          <h3 className="text-xl text-black self-start mb-2">{title}</h3>
          {author && <p className="text-sm text-gray-500 mb-4">{author}</p>}
          <p className="text-sm text-gray-700 mb-4">{description}</p>
          <div
            onClick={onClose}
            className="inline-flex justify-self-end mt-auto justify-center items-center rounded-sm py-3 border text-white bg-text2 cursor-pointer hover:bg-accent hover:border-text2 duration-500 transition-all ease-in-out"
          >
            Закрыть
          </div>
        </div>
        <div className='sm:basis-1/2 order-1'>
            {photo && (
            <div className="rounded-sm h-full overflow-hidden mb-4 max-w-screen-sm">
                <img
                src={photo}
                alt={title}
                className="object-cover h-full w-full bg-black transition-all duration-300"
                onError={(e) => console.error('Error loading image:', e.target.src)}
                onLoad={() => console.log('Image loaded:', photo)}
                />
            </div>
            )}
        </div>
      </div>
    </button>
  );
};
