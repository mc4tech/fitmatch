import React from "react";
import "./Text.css";




const Text = ({ children }) =>
  <div className="panel panel-default">
    <div className="panel-body">
    <div className="text">
     <h4>FitMatch is an app that uses your fitness <br/> </h4>
     <h4> data to match you with friends with the same <br/> </h4>
     <h4>                 performance.                           </h4>
    {children}
    </div>
    </div>
  </div>;

export default Text;
