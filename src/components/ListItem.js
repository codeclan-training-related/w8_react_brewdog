import React from 'react';

const ListItem = ({ beer }) => {
  return (
    <li>
    <div className='listItem'>
    <p>Name: {beer.name}</p>
    <img src={beer.image_url} alt={beer.name} style={{ width: '100px', height: '150px' }} />
    <button>Remove</button>
    </div>
    </li>
  );
};

export default ListItem;


