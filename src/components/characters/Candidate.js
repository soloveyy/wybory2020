import React from 'react'

const Candidate = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Numer na karcie do glosowania:</strong> {item.number}
            </li>
            <li>
            <li>
              <strong>Wiek:</strong> {item.age}
            </li>
              <strong>Zawód:</strong> {item.profession}
            </li>
            <li>
              <strong>Miejscowość zamieszkania:</strong> {item.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Candidate