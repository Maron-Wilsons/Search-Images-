import React, { createContext } from 'react'
import Images from './components/Images'
import Jumbutron from './components/Jumbutron'
import Search from './components/Search'
import useAxios from './hooks/useAxios'

export const   ImageContext = createContext()
const App = () => {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
const value = {
  response, 
  isLoading,
  error,
  fetchData,
  } 
  
  return (
    < ImageContext.Provider value={value}>
    <Jumbutron>
    <Search/>
  </Jumbutron>
  <Images/>
    </ ImageContext.Provider>
  )
}

export default App