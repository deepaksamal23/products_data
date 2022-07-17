import React from 'react'
import {Link} from 'react-router-dom'


const Products = ({item}) => {

  return (
  <>
    
     
          <div>
    <h1 className='text-center col-lg-4 col-md-12 col-12 '>Products</h1>
    <div className="container  my-3   d-flex justify-content-center align-items-center">
      <div className="row ">
     {
      item.map((elem)=>{
return(
      
      <div className="col-lg-4 col-md-12 col-12  "  key={elem.id}>
            <div className="card mx-2 mt-4" style={{width: "20rem ",border:'none'}}>
  <Link to={`/products/${elem.id}`}> <img src={elem.image} className="card-img-top mt-3" alt="..." style={{height:'14rem'}}/></Link>
  <div className="card-body">
  <Link to={`/products/${elem.id}`} className='text-decoration-none'><h5 className="card-title d-flex justify-content-center my-3" style={{height:'6rem'}}>{elem.title}</h5></Link>
  <div className="d-flex justify-content-between  mt-5">
  <span><strong className="text-danger ">Rating</strong>: {elem.rating.rate}</span>
  <span><strong className="text-success  ">Count</strong>: {elem.rating.count}</span>


  </div>
    <span className='d-flex justify-content-center  mt-3 '>Price: <strong>$ {elem.price}</strong></span>
    <br />
   


  </div>
</div>
            </div>
      
)
      }) 
     }
      </div>
    </div>
    </div>
          
        
    
  </>
  )
}

export default Products