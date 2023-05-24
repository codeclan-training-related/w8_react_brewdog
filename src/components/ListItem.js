import React from 'react';

const ListItem = ({ beer, removeBeer }) => {
  return (
    <li>
      <div className='listItem' value={beer.id}>
        <p>Name: {beer.name}</p>
        <img src={beer.image_url} alt={beer.name} style={{ width: '100px', height: '150px' }} />
        <button onClick={() => removeBeer(beer.id)}>Remove</button>
      </div>
    </li>
  );
};

export default ListItem;
