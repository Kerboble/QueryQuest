import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [{url: "/search", text:'All'},
  { url: '/images', text: 'Images' },
  { url: '/videos', text: 'Videos' },
  { url: '/news', text: 'News' },
];

function Links() {
  const activeStyles = {
    color: 'blue',  
    borderBottom: '2px solid blue', 
  };

  return (
    <div className='flex sm:justify-around justify-between justify-items-center mt-4'>
      {links.map(({ url, text }, index) => (
        <NavLink key={index} to={url} style={({isActive}) => isActive ? activeStyles : null}>
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export default Links;
