import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`/images/${props.item.coverImg}`} alt='' className='card--img' />
      <div className='card--content'>
        <div className='card--top'>
          <img src='/images/location.png' alt='' className='location--img'/>
          <p className='card--location'>{props.item.location}</p>
          <p className='card--link'>{props.item.googleMapsUrl}</p>
        </div>
        <h1 className='card--title'>{props.item.title}</h1>
        <p className='card--date'>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>

    </div>
  )
}
