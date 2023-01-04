import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <p className='text-primary text-7xl mx-auto'>
              {props.icon}
            </p>
            <h2 className="card-title self-center text-primary">{props.title}</h2>
            <p>{props.content}</p>
            <div className="card-actions justify-center mt-5">
                <button className="btn btn-secondary">Compare Plans</button>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard