import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import {useCustomHook} from './Context'

const App = () => {

const data = useCustomHook()

  return (
    <>
      <div>This is App Component {data} </div>
      <Search />
      <Pagination />
      <Stories />
    </>
  )
}

export default App

