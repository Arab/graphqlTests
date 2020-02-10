import React from 'react'

import Humans from '../components/Humans'
import Droids from '../components/Droids'

export default function List(props) {
  return (
    <>
      <h1 style={{ textAlign: "center"}}>Stare Wars Characters</h1>
      <div className="App">
      <Humans {...props} />
      <Droids {...props} />
      </div>
    </>
  )
}


