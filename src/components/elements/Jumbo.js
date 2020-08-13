import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Jumbo() {
    return (
        <Jumbotron id="jumbo">
            <p id="jumbotron-text">Nischal <span id="weds">Weds</span> Aparna</p>
            <p id="jumbotron-date">March 8<sup>th</sup> 2020</p>
            <p id="jumbotron-location">Mangalore</p>
        </Jumbotron>
    );
}

export default Jumbo;