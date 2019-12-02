import React from "react";

const cat_images = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreativepool.com%2Ffiles%2Fcandidate%2Fportfolio%2Ffull%2F1118418.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0f%2F10%2Fbd%2F0f10bd1dbecaa2bfd33612bb04d99347.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F81%2F34%2Fbe%2F8134bec85c41d6ad60fd25d5b9d22e3c.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.telegraph.co.uk%2Fmultimedia%2Farchive%2F01834%2Fcat-thumbs-up_1834999i.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F9ntqak56mqh21.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.imgur.com%2FlCFGt7m.jpg&f=1&nofb=1'
];

export const DefaultImageComponent = ({handleClick}) => {

  const onClick = () => {
      handleClick(cat_images[Math.floor(Math.random() * cat_images.length)]);
  };

  return (
      <div className="m-1 w-full text-center py-4 lg:px-4" onClick={ onClick }>
          <div
              className="cursor-pointer select-none p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert">
                    <span
                        className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
              <span className="font-semibold mr-2 text-left flex-auto">Click here to use cool random image</span>
          </div>
      </div>
  )
};
