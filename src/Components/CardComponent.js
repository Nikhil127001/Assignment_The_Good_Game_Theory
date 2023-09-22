import React from 'react'

const CardComponent = (props) => {
    const {item} = props
  return (
    
  <div style={{display: 'flex', justifyContent : 'center'}}  className="col">
    <div style={{ height: '500px', width : '300px',display : 'flex' , alignItems: 'center', overflow: 'hidden'}} className="card">
      <img style={{height : '400px', width : '150px'}}  src={item.image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.tagline}</p>
      </div>
    </div>
  </div>
    
  )
}

export default CardComponent
