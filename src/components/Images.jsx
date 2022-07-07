import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './image'
import Skeleton from './Skeleton'
const Images = () => {
const {response , isLoading} = useContext(ImageContext)
  return (
    <> 
    <h1 className="text-center mt-6 underline text-2xl ">Result for  Cats </h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-width-7xl mx-uoto px-4">
 {isLoading ? <Skeleton item={10}/>: response.map((data, key) => <Image key={key} data={data}/>)}
    </div>
    </>

  )
}

export default Images