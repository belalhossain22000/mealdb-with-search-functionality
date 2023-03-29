import React from "react";

const Header = () => {
    const handleSearFeald=()=>{
       
        console.log('clicked')
    }
    

  return (
    <div className="text-center">
      <div>
        <input
          className="w-50 p-3 rounded-4 m-2"
          type="text"
         
          id=""
          placeholder="search foof by name"
        //   ref={(c) => this.title = c} name="title"
         
        />
        <button onClick={handleSearFeald} className="btn btn-primary m-2 p-3 w-25 fw-bold">search</button>
      </div>
    </div>
  );
};

export default Header;




