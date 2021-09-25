import React, { Component } from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';

import './item-list.css';



export default class ItemList extends Component {
  swapi = new SwapiService()

  state = {
    items: []
  }

  componentDidMount = () => {
    this.swapi.getAllPeople().then((data) => {
      this.setState({items: data})
    })
  }

  prepareItems = (itemList) => {
    return itemList.map((item) => {
      return (
        <li
          onClick={() => this.props.onItemSelected(item.id)}
          key={item.id}
          className="list-group-item"
        >
          {this.props.renderFunction(item)}
        </li>
      )
    })
  }

  render() {
    const content = this.prepareItems(this.state.items)

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
