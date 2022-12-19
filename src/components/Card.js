import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className='card'>
        <img src={`/images/${props.item.coverImg}`} alt='' className='card--img' />
        <div className='card--content'>
          <div className='card--top'>
            <img src='/images/location.png' alt='' className='location--img'/>
            <p className='card--location'>{props.item.location}</p>
            <a href={`${props.item.googleMapsUrl}`} target='_blank' rel='noreferrer' className='card--link'>{props.item.googleMapsUrl}</a>
          </div>
          <h1 className='card--title'>{props.item.title}</h1>
          <p className='card--date'>{props.item.startDate} - {props.item.endDate}</p>
          <p className='card--description'>{props.item.description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
