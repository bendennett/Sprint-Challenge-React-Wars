import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./Character"


const CharacterData = () => {

    const [starData, setStarData] = useState([]);

useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => {
        setStarData(response.data.results)
        console.log("response", response.data.results);
    })
    .catch(err => console.log("Error!", err));
}, []);

return (
    <div>
        {starData.map(item => {
            return <CharacterCard name={item.name} weight={item.mass} skinColor={item.skin_color} eyeColor={item.eye_color} />;
        })}
    </div>
);
}

export default CharacterData;