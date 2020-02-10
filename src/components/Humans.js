import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { LIST_ALL_STAR_WARS_HUMANS } from '../queries/list'

export default function Humans(props) {
  const { loading, error, data } = useQuery(LIST_ALL_STAR_WARS_HUMANS);

  const goTo = id => {
    props.setCharacterId(id)
    props.setRoute("character")
  }

  if (loading) return <p style={{textAlign: "center"}}>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <div>Humens: </div>
    <ul>
      {data.Species.people.map(humen => <li key={humen.id} onClick={() => goTo(humen.id)}>{humen.name}</li>)}  
    </ul>  
    </div>
  )
}