import React, { useState, useEffect} from 'react'
import styled, { keyframes } from "styled-components";

const StyledPhoto = styled.div`
display: flex;
flex-direction: column;
align-content: center;
max-width: 100%;
padding: 2%;
background-color: ${props => props.theme.black};
color: ${props=> props.theme.white};
`

const Photo = ({apod, title}) => {
  console.log(apod.title)
return (
   <StyledPhoto><h2>{title}</h2>
    <h2>{apod.title}</h2>
<h3>{apod.date}</h3>
    <img src={apod.url} alt="NASA pic of day"/>
<p>{apod.explanation}</p>
</StyledPhoto>)
}

export default Photo