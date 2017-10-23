import React from "react";
import "./Text.css";

const Text = ({ children }) =>
  <div className="panel panel-default">
    <div className="panel-body">
    <div className="text">

     <h4>Fitmatch is an app that uses your fitness <br/> </h4>
     <h4> data to match you with friends with the same <br/> </h4>
     <h4>                 performance.          </h4>
    </div>
    <h2><a>Fitmatch<i className="fa fa-heartbeat" aria-hidden="true"></i></a></h2>
    <p>Stay active. Have fun.</p>
    <h2>Join now to find your match</h2>
    <p className="text-muted">Stay connected to stay motivated.</p>
    {children}
  </div>
</div>;


export default Text;
