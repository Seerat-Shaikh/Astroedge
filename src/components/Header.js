import React from 'react'
import styled from 'styled-components';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display:ital@0;1&family=Poppins:ital,wght@0,200;0,300;1,200&display=swap');
</style>


export default function Header() {
  return (
    <HeaderContainer>
      <h3>Space</h3>
      <ul>
        <li>Voyages</li>
        <li>spacecrafts</li>
        <li>travel expeneditures</li>
      </ul>

    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
width:90%;
height:5rem;
background-color:transparent;
display:flex;
align-items:center;
justify-content:space-between;
font-family:font-family: 'Poppins', sans-serif;



h3{
  color:white;
  display:flex;
  align-items:center;
  padding:0 2rem
}

ul{
  margin-left:7rem;
  list-style:none;
  text-decoration:none;
  color:white;
  display:flex;

li{
  display:flex;
  margin-left:2rem;

}

}
`

