import React from 'react';
import BeerInfo from './BeerInfo';
import Buttons from './Buttons';

const BeerRandom = ({ beer, getBeer, showMore, saveSelected, showInfo, isSaved }) => {
  return (
    <>
      {beer && (
        <>
          <div className="main-container">
            <button className="beer-select" onClick={getBeer}>
              Any Beer
            </button>
            <Buttons showMore={()=>{showMore(beer.id)}} saveSelected={()=>saveSelected(beer.id)} showInfo={showInfo} isSaved={isSaved} />
          </div>
          <div>
            <p >{beer.name}</p>
            <img src={beer.image_url} alt={beer.name} style={{ width: '200px', height: '300px' }} />
          </div>
          {showInfo && <BeerInfo beer={beer} showInfo={showInfo} />}
        </>
      )}
    </>
  );
};

export default BeerRandom;