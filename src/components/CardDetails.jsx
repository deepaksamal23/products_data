import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import {useParams} from "react-router-dom"
const  CardDetails =({item})=>{
      const {productId} = useParams()
      const thisProduct = item.find(prod => prod.id ==productId)
  return (
    <div>
          <div className="container mt-3">
<h1 className='text-center '>Card Details</h1>
<section className='sproduct'>
      <div className='row'>
            <div className='col-lg-5 col-md-12 col-12'>
      <Image src={thisProduct.image} alt="img" />
            </div>
            <div className='col-lg-6 col-md-12 col-12 text-center '>
                  <h3>{thisProduct.title}</h3>
                  <div className='two_data'>

                  <h4 className='text-danger'>Price: <strong>$ {thisProduct.price}</strong></h4>
                  <h5 className='text-info'>{thisProduct.category}</h5>
                  </div>
                  <div className="rating mt-3">

                  <p><strong>Rating :</strong><span style={{ background: "blue", padding: '2px 5px', color: "white", borderRadius: " 5px" }}>{thisProduct.rating.rate} ★</span></p>
                  </div>
                  <div className='desc'>
                        <p><strong>{thisProduct.description}</strong></p>
                  </div>
<Link to={"/"}><button className='btn btn-danger'>Add to Cart</button></Link>
            </div>
      </div>
</section>
      </div>
       
    </div>
  )
}

export default CardDetails