import { useRouteError } from "react-router-dom";

import React from 'react'

const Error = () => {
    const err = useRouteError()
    const {status, statusText} = err
  return (
    <div>
        <h1>Oops!!</h1>
        <h2>{status}{statusText}</h2>
    </div>
  )
}

export default Error