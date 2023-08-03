import React from 'react'

const getPhotos = async() => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos',);
    let photos = await response.json();
    return photos = photos.slice(0, 5);
  }catch(error){
    console.log(error);
  }
}

export default getPhotos
