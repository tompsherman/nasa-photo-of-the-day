import React, { useState, useEffect} from 'react'

const Photo = ({apod, title}) => {
  console.log(apod.title)
return (<div>
    <h2>{title}</h2>
    <h2>{apod.title}</h2>
<h3>{apod.date}</h3>
    <img src={apod.url} alt="NASA pic of day"/>
<p>{apod.explanation}</p>
 </div>)
}

export default Photo