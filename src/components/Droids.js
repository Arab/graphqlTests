import React, { Component, createRef } from 'react';
import { Query } from 'react-apollo';

import { GET_FILTERED_DROIDS } from '../queries/list'

class Droids extends Component {
constructor(){
  super()
  this.state = {
    filter: "",
  }
  this.inputRef = createRef()
}

  _goTo = id => {
    this.props.setCharacterId(id)
    this.props.setRoute("character")
  }

render() {
  return (
  <div>
    <div>Droids: </div>
    <input ref={this.inputRef} placeholder="Search" value={this.state.filter} onChange={e=> this.setState({ filter: e.target.value })}></input>
    <Query query={GET_FILTERED_DROIDS} variables={{ droidFilter: { "name_contains" : this.state.filter  } }} >
        {({ loading, error, data} ) => {
          if (loading) return <p style={{textAlign: "center"}}>Loading...</p>
          if (error) return <p>Error :</p>
          if (data.Species.people.length === 0) return <p>No Droids</p>

          return (
            <div>
            <ul>
              {data.Species.people.map(droid => <li className="droid" key={droid.id} onClick={() => this._goTo(droid.id)} >{droid.name}</li>)}  
            </ul>  
            </div>
          )
        }} 
      </Query>
  </div>)
  }
}

export default Droids