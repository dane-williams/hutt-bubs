import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Footer from './Footer'
import Media from './Media'
import Todo from './Todo'
import Header from './Header'
import Events from './Events'
import Parks from './Parks'
import Groups from './Play-Groups'
import Cafes from './Cafes'

function App () {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/media' element={<Media />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/parks' element={<Parks />} />
          <Route path='/events' element={<Events />} />
          <Route path='/cafes' element={<Cafes />} />
          <Route path='/play-groups' element={<Groups />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
