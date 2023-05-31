import React, { useEffect, useState } from 'react'

const Profile = ({age}) => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log('render interval')
    },1000)

    return () => {
      clearInterval(interval)
    }
  })

  
  return (
    <div>{age} {count}</div>


  )
}

export default Profile