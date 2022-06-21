import React from 'react'
import { FaRestroom, FaChild, FaBiking, FaParking, FaBabyCarriage, FaSkating, FaHiking } from 'react-icons/fa'

function Parks () {
  return (
    <>
      <div className='art_title'>
        <h1>Parks in the Hutt Valley</h1>
      </div>
      <div className='parks-page'>
        <div className='print_before'>
          <div>
            <h2><a href='https://goo.gl/maps/ngNknbUMHCQkSGgT9'>Avalon</a></h2><div className='icons'><FaRestroom />&nbsp;<FaChild />&nbsp;<FaBiking />&nbsp;<FaParking />&nbsp;<FaBabyCarriage />&nbsp;<FaSkating /></div>
            <p>Possibly the best park in the Hutt Valley. Upgraded recently. Has a very good play area for the slightly older kids. A water play area and a small play area for the younger ones. All this plus a flat bike track, skate park, duck pond, seasonal train rides and brand new toilet block make it a must for parents looking to keep children entertained. </p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/Avalon Park.jpeg'/></div>
        </div>

        <div className='print_after'>
          <div>
            <h2><a href='https://goo.gl/maps/Q8ZWxbUWiXhN1UpH8'>Parkay Family Playground</a></h2><div className='icons'><FaRestroom />&nbsp;<FaChild />&nbsp;<FaParking />&nbsp;<FaBabyCarriage /></div>
            <p>Has two main areas. An older area that has flying fox and obstacle style park. Much better for the older kids. Its biggest plus is the newly built play area for the smaller kids. Decent play area but fully fenced. The park has recently had a new toilet built and is only a few hundred meters from a brand new dog park.</p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/parkway.jpeg'/></div>
        </div>

        <div className='print_before'>
          <div>
            <h2><a href='https://goo.gl/maps/KVRMv1LS9vN7KskZ7'>Maidstone Park</a></h2><div className='icons'><FaRestroom />&nbsp;<FaChild />&nbsp;<FaBiking />&nbsp;<FaParking />&nbsp;<FaBabyCarriage />&nbsp;<FaSkating /></div>
            <p>The newest of the Hutt Valley parks. Another excellent area filled with plenty to do. Castles, musical instruments, flying fox, skate park and brand new toilet area. Close to a local ice skating rink and Brewtown which has go-carts and paint ball.  </p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/maidstone.jpeg'/></div>
        </div>

        <div className='print_after'>
          <div>
            <h2>Percy Scenic Reserve</h2><div className='icons'><FaRestroom />&nbsp;<FaParking />&nbsp;<FaHiking /></div>
            <p>Percy Scenic Reserve is a beautifully unique park just on the edge of Lower Hutt City. With a mix of garden area, easy trails, a small cave and a waterfall it’s a perfect spot for youngsters to have their first forest or trail experience amongst some rare native plants.</p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/percy.png'/></div>
        </div>

        <div className='print_before'>
          <div>
            <h2>Civic Gardens</h2>
            <p>Located behind the War memorial Library and Little Theatre, the playground is a wonderful spot for families. With two slides and two sets of swings, no one will miss out. P120 parking is available off Woburn Road, or pay and display parking on surrounding streets.</p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/civic gardens playground.jpeg'/></div>
        </div>

        <div className='print_after'>
          <div>
            <h2>Hugh Sinclair Park</h2>
            <p>There is a skate park behind the playground for older children. Plenty of parking is available on the Strand.</p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/High Sinclair Park Wainui.jpeg'/></div>
        </div>

        <div className='print_before'>
          <div>
            <h2>Speldhurst Park</h2>
            <p>There are great playground equipment, a skate ramp, barbeques and a huge grass area for the kids to let off some steam.</p>
          </div>
          <div className='pic-div'><img className='parks' src='/images/Speldhurst Park Stokes Valley.jpeg'/></div>
        </div>
      </div>
    </>
  )
}
export default Parks
