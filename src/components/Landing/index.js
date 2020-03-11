import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import Exchange from '../exchange'
import FloatCart from '../FloatCart';
import Svgbg from '../svgbackground'
import Trade from '../trade'
import Btcchart from '../bitchart'
const Landing = () => (
  <React.Fragment>
<Svgbg/>
    
    
    <Btcchart/>
    <Trade />
  </React.Fragment>
);

export default Landing;