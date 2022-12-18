import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`/images/${props.item.coverImg}`} alt='' className='card--img' />
      <div className='card--top'>
        <img src='/images/location.png' alt='' />
        <p>{props.item.location}</p>
        <p>{props.item.googleMapsUrl}</p>
      </div>
      <h1>{props.item.title}</h1>\
      <p>{props.item.startDate} - {props.item.endDate}</p>
      <p>{props.item.description}</p>
    </div>
  )
}
