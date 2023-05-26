import React from "react";

const Buttons=({showMore, saveSelected, showInfo,isSaved })=>{

    return(<>
    <button className="beer-info" onClick={showMore}>
    {showInfo ? 'Hide Info' : 'More Info'}
  </button>
  <button className="beer-save" onClick={saveSelected}>
    {isSaved ? 'Saved' : 'Save'}
  </button>
  </>)


}




export default Buttons