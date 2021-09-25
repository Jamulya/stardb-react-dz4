import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';


class PeoplePage extends React.Component {
  state = {
    selectedItemId: 1
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        renderFunction={(item) => <span>{item.name} ({item.birthYear})</span>}
      />
    )

    const personDetails = (
      <PersonDetails
        selectedItemId={this.state.selectedItemId}
      />
    )

    return (
      <Row
        leftComponent={itemList}
        rightComponent={personDetails}
      />
    )
  }
}

export default PeoplePage
