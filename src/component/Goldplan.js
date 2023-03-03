import React from 'react'
import data2 from '../RE-use/data2'
import Productlist2 from './Productlist2'
import Header from './Header'
import Nav2 from '../RE-use/Nav2'

const Goldplan = () => {
    const{product}=data2
  return (
    <div>
        <Header/>
        <Productlist2 product={product}/>
        <Nav2/>
       
    </div>
  )
}

export default Goldplan