import React from 'react'
import { useCustomHook } from "./Context";

const Stories = () => {

  const { hits, nbPages, isLoading } = useCustomHook();

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <div className='stories-div'>
        {hits.map((curPost) => {

          const { title, author, objectID, url, num_comments } = curPost

          return <>
            <div className='card' key={objectID}>
              <h2>{title}</h2>
              <p>
                By {author} | <span>{num_comments}</span>
              </p>
              <div className='card-button'>
                <a href={url}>
                  Read More
                </a>
                <a href='#'>Remove</a>
              </div>
            </div>
          </>

        })};
      </div>
    </>
  )
}

export default Stories
