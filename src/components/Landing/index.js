import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import Exchange from '../exchange'
import FloatCart from '../FloatCart';

const Landing = () => (
  <React.Fragment>
    <main>
     <Exchange/>
    </main>
   <div className='threecompartment'>
     <div className='producttab'>GIVE
     <div>BTC</div>
     <div>ETH</div>
     <div>PAYPAL</div>
     <div>PERFECT MONEY</div>
     </div>
     <div className='producttab'>GET
     <div >BTC</div>
     <div>ETH</div>
     <div>PAYPAL</div>
     <div>PERFECT MONEY</div>
     </div>
     <div className='transactiontab'>transaction</div>
   </div>
  </React.Fragment>
);

export default Landing;