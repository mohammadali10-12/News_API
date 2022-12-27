import React from 'react'
import {useCustomHook  } from "./Context";

const Stories = () => {

const {hits,nbPages,isLoading} = useCustomHook();

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      {hits.map((curPost,k) => {
        return<>
        <h2>{curPost.title}</h2>
        {curPost.author}
        </>
        
      })};

    </>
  )
}

export default Stories
