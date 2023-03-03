import React from 'react'
import data3 from '../RE-use/data3'
import Productlist from './Productlist'
import Header from './Header'
import Nav2 from '../RE-use/Nav2'

const Platinum = () => {
    const{product}=data3
  return (
    <div>
        <Header/>
        <Productlist product={product}/>
        <Nav2/>
       
    </div>
  )
}

export default Platinum