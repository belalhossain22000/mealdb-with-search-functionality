import React from "react";
import { useState } from "react";


const Header = ({searchTerm,handleSearFeald,handleInputChange}) => {
   

  
  

  return (
    <div className="text-center">
      <div>
        <input
          className="w-50 p-3 rounded-4 m-2"
          value={searchTerm}
          type="text"
          id=""
          placeholder="search food by name"
          onChange={handleInputChange}
        />
        <button
         onClick={handleSearFeald}
          className="btn btn-primary m-2 p-3 w-25 fw-bold"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
