import React from 'react';

import Carousel from '../elements/Carousel';
import Jumbo from '../elements/Jumbo';
import Video from '../elements/Youtube';

function Homepage() {
    return (
        <div>
            <Jumbo />
            <Carousel />
            <Video />
        </div>
    );
}

export default Homepage;