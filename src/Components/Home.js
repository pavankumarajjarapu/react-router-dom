import React from "react";
import Navi from "./Navi";

function Home() {
  return (
    <div>
      <Navi></Navi>
      <div className="home">
        <div className="captionDiv">
          <h1 className="caption">
            Welcome to <br></br>REACTS !
          </h1>
          <div className="para1"> 
            
          <p> where you can order affordable WEBDESIGNS....</p>
          
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
