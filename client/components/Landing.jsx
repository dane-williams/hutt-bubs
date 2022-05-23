import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <>
      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>Wainuiomata<br/>
            <span style={{ fontSize: '18px' }}>2021</span>
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul className="days">
        <li>Woodhatton</li>
        <li>Woodhatton</li>
        <li>Woodhatton</li>
        <li>Woodhatton</li>
        <li>Bush Session</li>
        <li></li>
        <li></li>
        <li>Wainui Playcentre</li>
        <li>Wainui Playcentre</li>
        <li>Wainui Playcentre</li>
        <li>Wainui Playcentre</li>
        <li>Wainui Playcentre</li>
        <li></li>
        <li></li>
        <li>Play Group</li>
        <li>Play Group</li>
        <li>Play Group</li>
        <li>Play Group</li>
        <li>Play Group</li>
        <li></li>
        <li></li>

      </ul>
      <div className="container1">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/header.png'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/todo' style={{ textDecoration: 'none' }}><h1 className="content-title">Whats to do</h1></Link>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/resources.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/resources' style={{ textDecoration: 'none' }}><h1 className="content-title">Services</h1></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing
