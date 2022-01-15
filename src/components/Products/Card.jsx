import React from 'react'

const Card = ({ig,topic,description}) => {
    return (
        <div className='container'>
            <div className="card">
            <figure>
                <img src={ig} className="card-img-top img-fluid" alt="img"/>
                <figcaption style={{marginTop:'10px',fontWeight:'500',color:'tomato',fontFamily:'fantasy'}}>{topic}</figcaption>
            </figure>
            </div>
        </div>
    )
}

export default Card
