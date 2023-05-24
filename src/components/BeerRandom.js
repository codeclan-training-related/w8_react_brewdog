import React from 'react';
import BeerInfo from './BeerInfo';

const BeerRandom = ({ beer, getBeer, showMore, saveSelected, showInfo, isSaved }) => {
  return (
    <>
      {beer && (
        <>
          <div className="main-container">
            <button className="beer-select" onClick={getBeer}>
              Any Beer
            </button>
            <button className="beer-info" onClick={showMore}>
              {showInfo ? 'Hide Info' : 'More Info'}
            </button>
            <button className="beer-save" onClick={saveSelected}>
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
          <div>
            <p>{beer.name}</p>
            <img src={beer.image_url} alt={beer.name} style={{ width: '200px', height: '300px' }} />
          </div>
          {showInfo && <BeerInfo beer={beer} showInfo={showInfo} />}
        </>
      )}
    </>
  );
};

export default BeerRandom;
