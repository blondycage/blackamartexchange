import React from 'react';
import { useState } from 'react';
import '../components/trade.css';
import { Dropdown } from 'semantic-ui-react';
import btc from '../static/icons/btc.png'
const serviceOptions = [
  {
    key: 'BITCOIN',
    text: 'BITCOIN',
    value: 'BITCOIN',
    image: {
      avatar: true,
      src:require('../static/icons/btc.png')
    }
  },
  {
    key: 'ETH',
    text: 'ETHEREUM',
    value: 'ETHEREUM',
    image: {
      avatar: true,
      src:require('../static/icons/ethereum.png')
    }
  },
  {
    key: 'LTC',
    text: 'LITECOIN',
    value: 'LITECOIN',
    image: {
      avatar: true,
      src:require('../static/icons/ltc.png')
    }
  },
  {
    key: 'PPL',
    text: 'PAYPAL',
    value: 'PAYPAL',
    image: {
      avatar: true,
      src:require('../static/icons/paypal2.png')
    }
  },
  {
    key: 'PM',
    text: 'PERFECTMONEY',
    value: 'PERFECTMONEY',
    image: {
      avatar: true,
      src:require('../static/icons/pm.png')
    }
  }
  ,
  {
    key: 'WT',
    text: 'WIRETRANSFER',
    value: 'WIRETRANSFER',
    image: {
      avatar: true,
      src:require('../static/icons/wt.png')
    }
  }
  
];


function Trade() {
    const [give, setgive] = useState('bitcoin');
    const [get, setget] = useState('');
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'200px'}}>Instant Exchange</h1>
      <div className="tradecontainer">
        <div className="uppertradesection">
          <div className="giveselector">
              GIVE
            <Dropdown
              placeholder='Pick give medium'
              fluid
              selection
              options={serviceOptions}
              onChange={(e)=>{setgive(e.target.textContent)
                console.log(e.target.textContent)}}
                className='select'
            />
          </div>
          <div className="getselector">
            GET
            <Dropdown
              placeholder="Pick get medium"
              fluid
              className='select'
              selection
              options={serviceOptions}
              onChange={(e)=>{setget(e.target.textContent)
            console.log(e.target.textContent)}}
            />
          </div>
        </div>
        <div className="lowertradesection">
          <div className=" giveform">CALCULATE & TRADE 
          
          {give==="BITCOIN" && get==='ETHEREUM' ? <div>BTC/ETH</div>:null}
          {give==="BITCOIN" && get==='PAYPAL' ? <div>BTC/PAYPAL</div>:null}
          {give==="BITCOIN" && get==='PERFECTMONEY' ? <div>BTC/PERFECTMONEY</div>:null}
          {give==="BITCOIN" && get==='LITECOIN' ? <div>BTC/LITECOIN</div>:null}
          {give==="BITCOIN" && get==='WIRETRANSFER' ? <div>BTC/WIRETRANSFER</div>:null}
          {give==="ETHEREUM" && get==='BITCOIN' ? <div>ETH/BTC</div>:null}
          {give==="ETHEREUM" && get==='PAYPAL' ? <div>ETH/PAYPAL</div>:null}
          {give==="ETHEREUM" && get==='PERFECTMONEY' ? <div>ETH/PERFECTMONEY</div>:null}
          {give==="ETHEREUM" && get==='LITECOIN' ? <div>ETH/LITECOIN</div>:null}
          {give==="ETHEREUM" && get==='WIRETRANSFER' ? <div>ETH/WIRETRANSFER</div>:null}
          {give==="LITECOIN" && get==='ETHEREUM' ? <div>LTC/ETH</div>:null}
          {give==="LITECOIN" && get==='PAYPAL' ? <div>LTC/PAYPAL</div>:null}
          {give==="LITECOIN" && get==='PERFECTMONEY' ? <div>LTC/PERFECTMONEY</div>:null}
          {give==="LITECOIN" && get==='BITCOIN' ? <div>LTC/BTC</div>:null}
          {give==="LITECOIN" && get==='WIRETRANSFER' ? <div>LTC/WIRETRANSFER</div>:null}
          {give==="PAYPAL" && get==='ETHEREUM' ? <div>PAYPAL/ETH</div>:null}
          {give==="PAYPAL" && get==='BITCOIN' ? <div>PAYPAL/BTC</div>:null}
          {give==="PAYPAL" && get==='PERFECTMONEY' ? <div>PAYPAL/PERFECTMONEY</div>:null}
          {give==="PAYPAL" && get==='LITECOIN' ? <div>PAYPAL/LTC</div>:null}
          {give==="PAYPAL" && get==='WIRETRANSFER' ? <div>PAYPAL/WIRETRANSFER</div>:null}
          {give==="WIRETRANSFER" && get==='ETHEREUM' ? <div>WIRETRANSFER/ETH</div>:null}
          {give==="WIRETRANSFER" && get==='PAYPAL' ? <div>WIRETRANSFER/PAYPAL</div>:null}
          {give==="WIRETRANSFER" && get==='PERFECTMONEY' ? <div>WIRETRANSFER/PERFECTMONEY</div>:null}
          {give==="WIRETRANSFER" && get==='LITECOIN' ? <div>WIRETRANSFER/LTC</div>:null}
          {give==="WIRETRANSFER" && get==='BITCOIN' ? <div>WIRETRANSFER/BTC</div>:null}
          {give==="PERFECTMONEY" && get==='ETHEREUM' ? <div>PERFECTMONEY/ETH</div>:null}
          {give==="PERFECTMONEY" && get==='BITCOIN' ? <div>PERFECTMONEY/BTC</div>:null}
          {give==="PERFECTMONEY" && get==='WIRETRANSFER' ? <div>PERFECTMONEY/WIRETRANSER</div>:null}
          {give==="PERFECTMONEY" && get==='LITECOIN' ? <div>PERFECTMONEY/LTC</div>:null}
          {give==="PERFECTMONEY" && get==='BITCOIN' ? <div>PERFECTMONEY/BTC</div>:null}
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
export default Trade;
