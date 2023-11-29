import React from 'react'
import { useState,useEffect } from 'react'; 
import './Hero.scss';
import { MainContainer } from '../../../global/styles/globalStyle';
import api from '../../../utils/api';
const Hero = () => {

const [background, setbackground] = useState('');


useEffect(() => {
  
api.get('photos/random').then((res)=>{

setbackground(res.data.links.download);


}).catch((err)=>{

console.log(err);


})
  
}, [])


  return (
    <MainContainer className='herocontainer'
    style={{

backgroundImage:`url(${background})`,


    }}>

<div>
    <h1>Unsplash</h1>
     <span>The internet's source for visuals.<br/>Powered by creator everywhere.</span>


     </div>
    </MainContainer>
  )
}

export default Hero
