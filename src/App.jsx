import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
   const [accept, setAccept] = useState(false);
  const handleClick = () => {
    setShow(show=>!show);
  };
  const handleAccept = () => {
    setAccept(true);
    setShow(false);
  };
  const handleOutside=() => {
       setShow(false);
  }
  return (
    <>
      {!show && (
        <div className="flex h-screen relative">
          {accept ? (
            <p className="bg-gray-200 p-4 rounded-xl inline-block  items-center absolute top-[45%] left-[35%]">
              Congratulations you have Accpeted the offer
            </p>
          ) : (
            <button
              className="bg-gray-200 p-4 rounded-xl inline-block  items-center absolute top-[45%] left-[45%]"
              onClick={handleClick}
            >
              Show Offer
            </button>
          )}
        </div>
      )}
      {show && (
        <div className="h-screen relative" onClick={handleOutside}>
          <div className="bg-gray-100 absolute top-[35%] left-[40%] p-4 rounded-lg flex flex-col justify-between w-56 h-56">
            <button
              onClick={() => {
                setShow(false);
              }}
              className=" flex justify-start"
            >
              ❌
            </button>
            <p className=" flex justify-center">Accept this offer</p>
            <button
              onClick={handleAccept}
              className="bg-gray-400 p-2 rounded-xl "
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
