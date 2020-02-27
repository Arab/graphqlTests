import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SORTABLE_HUMANS } from '../queries/list'

export default function Humans(props) {
  const [sort, setSort] = useState("name_ASC")

  const { loading, error, data } = useQuery(GET_SORTABLE_HUMANS, {variables: {
    personSort: sort
  }});

  const goTo = id => {
    props.setCharacterId(id)
    props.setRoute("character")
  }
  const handleSortChange = selection => setSort(selection.target.value)
  if (loading) return <p style={{textAlign: "center"}}>Loading...</p>
  if (error) return <p>Error :(</p>
  
  return (
    <div>
      <h3>Humens: </h3>
      <label htmlFor="sortHumans">Choose sorting order: </label>
      <select value={sort} id="sortHumans" onChange={handleSortChange}>
        <option value="name_ASC">Sort ascending</option>
        <option value="name_DESC">Sort descending</option>
      </select>
    <ul>
      {data.Species.people.map(humen => <li className="humen" key={humen.id} onClick={() => goTo(humen.id)}>{humen.name}</li>)}  
    </ul>  
    </div>
  )
}