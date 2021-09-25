import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './random-planet.css';


export default class RandomPlanet extends Component {
  swapi = new SwapiService()

  state = {
      planet: {},
      load: true,
      error: false,
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * (15 - 1)) + 1;

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

  componentDidMount() {
    this.updatePlanet()
    this.intervat = setInterval(this.updatePlanet, 4000)
  }

  componentWillUnmount() {
      clearInterval(this.intervat)
  }

  render() {
    const {id, name, population, rotationPeriod, diameter} = this.state.planet;
    const url = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    if (this.state.load) {
      return <Spinner />
    }

    if (this.state.error) {
      return <ErrorIndicator />
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={url} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
