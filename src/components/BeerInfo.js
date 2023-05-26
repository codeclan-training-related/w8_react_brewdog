import React from 'react';

const BeerInfo = ({ beer, showInfo }) => {
  return (
    <>
      {showInfo && (
        <div>
          <h3>Description:</h3>
          <p>{beer.description}</p>
          <h3>Food Pairing:</h3>
          <ul>
            {beer.food_pairing.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BeerInfo;
