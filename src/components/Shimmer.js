import React from 'react'

function Shimmer() {
  return (
    <div className='shimmer'>
        {Array(10).fill('').map((e,index)=> <div className='shimmer-cards' key={index}>{e}</div>)}

        
    </div>
  )
}

export default Shimmer