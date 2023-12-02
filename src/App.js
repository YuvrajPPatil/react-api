import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import React, { Component }  from 'react';
//import Example_5  from './components/Example_5';

function App() {
  const[images,setImages]=useState([]);

  const handleSubmit=async(term)=>{
    // console.log('DO a search with', term);
    const result=await searchImages(term);
    setImages(result);
  }
  return (
    <div >
       <SearchBar onSubmit={handleSubmit} />  
       <ImageList images={images}/>
    </div>
  );
}

export default App;
