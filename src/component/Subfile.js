import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';

const Subfile= (props) => {
    const {addItem }=useCart()
  return (
    <>
    <div className='col-6 col-md-4 col-lg-4 mx-0 mb-4 '>
        <div className=''>
    <Card  className=' p-0 overflow-hidden h-100 shadow'>
      <Card.Img  src={props.img} className='img-fluid' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <div className='text-center'>
        <Button className='btn btn-primary  text-white ' onClick={()=>addItem(props.items)} >Add to Cart</Button></div>
      </Card.Body>
    </Card>
        </div>  
    </div>
   
    </>
  )
}

export default Subfile



// {data.productdata.map((item,index)=>{
    // return(
    // <Booknow img={item.img} title={item.Title} desc='' />)})}
   