// Write your Character component here
import React from "react";
import styled from "styled-components";
import CharacterData from "./chardata";

const WrapDiv = styled.div`
border: 2px black solid;
text-transform: capitalize;
width: 70%;
margin-left: 15%;
background-color: rgba(143, 180, 143, .5);
margin-top: 10px;
font-size: 1.5em;
`;

const Title = styled.h1`
font-family: "Arial Black";
`;

const Sub = styled.h3`
font-size: 1.9em;
font-family: fantasy;
line-height: 50%;
`;

const CharacterCard = (props) => {
    console.log("props", props)
    return (
        <WrapDiv>
            <Title>Name: {props.name}</Title>
            <h2>Weight: {props.weight} Kilos</h2>
            <Sub>Skin Color: {props.skinColor}</Sub> 
            <Sub>Eye Color: {props.eyeColor}</Sub>
           
        </WrapDiv>
    );
};

export default CharacterCard