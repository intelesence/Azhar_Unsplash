import React from 'react'
import './NavBar.scss';
const TabBar = () => {

  const tempdata=['Wallpaper','3D Renderers','travel','Nature'];
  return (
    <div className='taBbarcontainer'>
      <span>Editorial</span>
      <span>Following</span>
      <hr/>

     {


      tempdata.map((elem,index)=>{

     return(


     <span key={index}>{elem}</span>



     )



      })


     }

    </div>
  )
}

export default TabBar
