import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Planets() {
  return (
    <>
      <Container>
        <Header />
        <h1>
          WHERE, DO YOU WANT TO TRAVEL IN <span>SPACE?</span>
        </h1>
        <ImageGrid>
          <ImageContainer>
            <Image src="images/mercury.jpg" alt="Image 2" />
            <ButtonLink to="/mercury">MERCURY</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/venus.jpg" alt="Image 2" />
            <ButtonLink to="/venus">VENUS</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/earth.jpg" alt="Image 2" />
            <ButtonLink to="/earth">EARTH</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/mars.jpg" alt="Image 2" />
            <ButtonLink to="/mars">MARS</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/astro.png" alt="Image 2" />
          </ImageContainer>
          <ImageContainer>
            <Image src="images/jupiter.jpg" alt="Image 2" />
            <ButtonLink to="/jupiter">JUPITER</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/saturn.jpg" alt="Image 2" />
            <ButtonLink to="/saturn">SATURN</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/uranus.jpg" alt="Image 2" />
            <ButtonLink to="/uranus">URANUS</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/neptune.jpg" alt="Image 2" />
            <ButtonLink to="/neptune">NEPTUNE</ButtonLink>
          </ImageContainer>
        </ImageGrid>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-image: url("images/bkgp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  overflow: auto;

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    margin-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const ImageGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

const PlanetHeading = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  color: #fff;
  position: relative; 
  z-index: 1;
`;


const ButtonLink = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #0056b3;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5c5470;
  }
`;




export default Planets;

