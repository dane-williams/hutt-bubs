import React from 'react'
import { Link } from 'react-router-dom'

function Todo () {
  return (
    <>
      <div className='art_title'><h1>What to do in Te Awa Kairangi</h1></div>
      <div className="todo_container">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/header.png'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/parks' style={{ textDecoration: 'none' }}><h1 className="content-title">Parks</h1></Link>
          </div>
        </div>
      </div>
      <div className="todo_container">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/cafe.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/cafes' style={{ textDecoration: 'none' }}><h1 className="content-title">Kid friendly cafes</h1></Link>
          </div>
        </div>
      </div>
      <div className="todo_container">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/play_group.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/play-groups' style={{ textDecoration: 'none' }}><h1 className="content-title">Play Groups</h1></Link>
          </div>
        </div>
      </div>
      <div className="todo_container">
        <div className="content">
          <div className="content-overlay"></div>
          <img className='image' src='/images/fair.jpeg'/>
          <div className="content-details fadeIn-bottom">
            <Link to='/events' style={{ textDecoration: 'none' }}><h1 className="content-title">Events</h1></Link>
          </div>
        </div>
      </div>

    </>
  )
}
export default Todo
