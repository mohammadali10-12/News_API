import React, { useEffect } from 'react'

const Stories = () => {

  let isLoading = true;

  let Api = 'http://hn.algolia.com/api/v1/search?query='

  const FetchApi = async (url) => {

    try {
      const resp = await fetch(url)
      const data = await resp.json();
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    FetchApi(Api);
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      {/* {hits.map((curPost) => {
        return<>
        <h2>{curPost.title}</h2>
        </>
        
      })} */}

    </>
  )
}

export default Stories
