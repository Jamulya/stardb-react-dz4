import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'


export default class PersonDetails extends Component {
  swapi = new SwapiService()

  state = {
    person: {},
    load: true,
    error: false,
  }

  componentDidMount() {
    const id = this.props.selectedItemId
    this.swapi.getPlanet(id).then((data) => {
      this.setState({
        planet: data,
        load: false,
      })
    }).catch((err) => {
      this.setState({
        load: false,
        error: true,
      })
    })    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemId != this.props.selectedItemId) {
      const id = this.props.selectedItemId
      this.swapi.getPerson(id).then(data => this.setState({person: data}))
    }
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.person;
    const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  
    if (this.state.load) {
      return <Spinner />
    }

    if (this.state.error) {
      return <ErrorIndicator />
    }
  
    return (
      <div className="person-details card">
        <img className="person-image"> 
              src={url}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
