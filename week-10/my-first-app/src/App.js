import React from "react";

const App = () => {
  const message = "This is my review of the new burger joint near me" 

  const handleClick = () =>{
    alert("you clicked the message!");
    }
  
  return(
  <div>
  <h2> Tasty burger</h2>
  <img src="https://source.unsplash.com/400x300/?burger" alt=""></img>
  <p>it's a good burger</p>
  <p onClick={handleClick}>{message}</p>
  </div>
);
}

export default App;