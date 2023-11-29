import React, { useEffect, useState } from 'react'
import { MainContainer } from '../../../global/styles/globalStyle';

import './ImageCollection.scss';
import api from '../../../utils/api';

const ImageCollection = () => {

const [list, setlist] = useState([]);

useEffect(() => {
  
api.get('search/photos?query=nas&page=').then((res)=>{

setlist([...list,...res.data.results]);


}).then((err)=>{

    console.log(err);
})
  
}, [list])

  return (
    <MainContainer className='ImageCollectionContainer'>

  {


list.map(({links},index)=>{

return(


<img key={index} src={links.download}
 alt="" />



)



})

  }
    </MainContainer>
  )
}

export default ImageCollection;
