import React from 'react'

const Rating = ({info,text}) => {
  return (
    <div className='rating'>
<span>
      <i className={info >=2 ? "fas fa-star": info >=2.5 ? 'fas fa-star-half-alt': 'fas fs-star'}></i>
</span>
    </div>
  )
}

export default Rating