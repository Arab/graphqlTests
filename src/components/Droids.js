import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { LIST_ALL_DROIDS } from '../queries/list'

export default function Droids(props) {
  const { loading, error, data } = useQuery(LIST_ALL_DROIDS);
  
  const goTo = id => {
    props.setCharacterId(id)
    props.setRoute("character")
  }

  if (loading) return <p style={{textAlign: "center"}}>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <div>Droids: </div>
    <ul>
      {data.Species.people.map(droid => <li key={droid.id} onClick={() => goTo(droid.id)} >{droid.name}</li>)}  
    </ul>  
    </div>
  )
}