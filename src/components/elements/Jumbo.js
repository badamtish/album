import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

import '../../App'
import { Container } from 'react-bootstrap';

function Jumbo() {
    return (
        <div className="jumbotron">
            <p className="text">Nischal Weds Aparna</p>
            <p className="date">March 8th 2020</p>
            <p className="text">Mangalore</p>
        </div>
    );
}

export default Jumbo;