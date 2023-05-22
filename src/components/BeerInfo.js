import React from 'react';

const BeerInfo = ({beer,showInfo}) => {
    if (beer && showInfo) {
        return (
    <>
       <div>
          <p>Name: {beer.name}</p>
          <p>Abv: {beer.abv}</p>
          <p>Description: {beer.description}</p>
          <p>Food Pairing: {beer.food_pairing.join(', ')}</p>
        </div>
    </>
  );
} else {
    return null;
  }}
  

export default BeerInfo;

