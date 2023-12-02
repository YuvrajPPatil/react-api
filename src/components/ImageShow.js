import React, { Component }  from 'react';
function ImageShow({image}){

    return(
        <div>
               <img src={image.urls.small} alt={image.alt_description}/> 
        </div>

    );
}
export default ImageShow;