import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

export default class PersonDetails extends Component {
 swapi = new SwapiService()
 
 state = {
   person: {}
 }

 updatePerson = () => {
   const id = Math.floor(Math.random() * (10 - 1)) + 1;

   this.swapi.getPerson(id).then((data) => {
     this.setState({
       person: data
     })
   })
 }

 componentDidMount() {
   this.updatePerson()
   this.intervat = setInterval(this.updatePerson, 4000)
 }

 componentWillUnmount() {
   clearInterval(this.intervat)
 }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.person;
    const url = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
          src={url} />

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
    );
  }
}
