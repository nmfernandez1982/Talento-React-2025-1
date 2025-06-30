import React from "react";
import styled from "styled-components";


const Card = styled.div`
  width: 18rem;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
`;


const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0d6efd;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #084298;
  }
`;





const CardStyled=()=>{
return(
<Card>
    <Title> Card con estilo propio</Title>
        <Text> Este es un componente con estilo </Text>
            <Button href="#" >Ingresar</Button>   
</Card>
);
};


export default CardStyled;