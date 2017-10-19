import React from "react";
import "./Text.css";

const Text = ({ children }) =>
  <div className="panel panel-default">
    <div className="panel-body">
    <div className="text">

     <h4>FitMatch is an app that uses your fitness <br/> </h4>
     <h4> data to match you with friends with the same <br/> </h4>
     <h4>                 performance.          </h4>
    {children}
    </div>
    <h1><a>Fitmatch<i className="fa fa-heartbeat" aria-hidden="true"></i></a></h1>
    <p>Stay active. Have fun.</p>
    <h2>Join now to find your match</h2>
    <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
    <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
    <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
    <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  </div>
</div>;


export default Text;
