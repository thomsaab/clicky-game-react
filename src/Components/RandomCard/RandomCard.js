import React from "react";
import "./RandomCard.css";

const RandomCard = props => (
    <a href=""><img src={props.image} className="img-thumbnail img-fluid" data-id={props.id} onClick={props.handleIncrement} width="250px" /></a>
);

export default RandomCard;
