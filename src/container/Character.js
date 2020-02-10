import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment'

import { GET_CHARACTER_BY_ID } from '../queries/list'

export default function List(props) {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {variables: {
    heroId: props.characterId
  }});
  if (loading) return <p style={{textAlign: "center"}}>Loading...</p>
  if (error) return <p>Error :(</p>
    
  return (
    <>
      <h1 style={{ textAlign: "center"}}>{data.Person.name}</h1>
      <div className="App">
        <div>
          there should be image but is not xD
          <div onClick={props.goBack}>GO BACK</div>
        </div>
        <div>
          <ul>
            {Object.keys(data.Person).map(key => key !== "__typename" && key !== "id" ? (<li key={key}>{
            key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
            } : <span>{key === 'name' ? 
                `${data.Person[key]}` : 
                key === 'createdAt' ? 
                  `${moment(data.Person[key]).format("DD/MM/YYYY")}` : 
                  `${data.Person[key]}`.toLowerCase()}</span></li>) : 
              null 
            
          
          )}
          </ul>
          
        </div>
      </div>
      
    </>
  )
}
