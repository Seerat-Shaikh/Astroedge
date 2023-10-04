import React from 'react';
import styled from 'styled-components';
import Header from './Header';

function Home() {
  return (
    <>
      <Container>
        <Header></Header>
        <h1>
          {' '}
          SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
        </h1>
        <p>Be interested, Be explorer, Be first.</p>
        <button>Start Tour</button>
        <SubContainer></SubContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  &:before {
    background-color:#000000;
    background: no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  h1{
    position:absolute;
    top:18rem;
    left:7rem;
    font-size:2rem;
    font-family: 'Work Sans', sans-serif;
    letter-spacing:4px;
    font-family: 'Amatic SC', cursive;
    line-height:5rem;

    span{
    display:block;
    text-align:center;
    letter-spacing:18px;
    font-size:85px;
    font-family: 'Josefin Sans', sans-serif;
    }
  }

  p{
    position:absolute;
    top:28.5rem;
    left: 8.1rem;
    font-size:1.2rem;
  }


  button{
    width:15rem;
    height:3rem;
    padding:0.5rem 1rem;
    display:inline;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:transparent;
    color:white;
    position:absolute;
    top:40rem;
    // left:7rem;
    right:25rem;
    border: 1px solid white;
    border-radius:25px;

  }
`;



const SubContainer = styled.div`
  min-width: 35%;
  height: 100%;
  background: url('images/halff.png');
  background-position: right;
  background-size: cover;
  display: flex;
  justify-content: end;
`;

export default Home;
