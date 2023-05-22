import React from 'react';

const BeerRandom = ({ beer }) => {
  return (
    <>
      {beer && (
        <div>
          <p>{beer.name}</p>
          <img src={beer.image_url} alt={beer.name} style={{ width: '200px', height: '300px' }} />
        </div>
      )}
    </>
  );
};

export default BeerRandom;
