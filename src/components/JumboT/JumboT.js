import React from "react";
import "./JumboT.css";

const JumboT = props => (
  <div className="jumboT text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default JumboT;
