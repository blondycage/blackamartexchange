import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    <div style={{display:'flex',
    color:'white'}}>
    <Image src={logo} alt="Company Logo" />
    <h1 className='logotitle'>BLACKMART</h1>
    </div>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;