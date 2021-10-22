import React from 'react'
import Language from '../data/Languages'

const Languages = () => {
  return (
    <section className='languages'>
      <h2 className='md text-center my-2'>Supported Languages</h2>
      <div className='container flex'>
        {Language.map((item) => (
          <div className='card' key={item._id}>
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages
