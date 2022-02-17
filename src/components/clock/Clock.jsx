import React from 'react'
import './clock.css'
function Clock({days,hours,min,sec}) {
  return (
     <div className="clock">
         <div className="section">
             <p className='p1'>{days}</p>
             <p className='p2'>Days</p>
         </div>
         <span>:</span>
         <div className="section">
             <p className='p1'>{hours}</p>
             <p className='p2'>Hours</p>
         </div>
         <span>:</span>
         <div className="section">
             <p className='p1'>{min}</p>
             <p className='p2'>Min</p>
         </div>
         <span>:</span>
         <div className="section">
             <p className='p1'>{sec}</p>
             <p className='p2'>Sec</p>
         </div>
     </div>
  )
}

Clock.defaultProps={
    days : 10,
    hours : 5,
    min : 56,
    sec : 12
}
export default Clock