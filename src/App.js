import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.comp';
import { SearchBox } from './components/search-box/search-box.comp';
import { Popup } from './components/popup/popup.comp';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      popup: false,
      popupData: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  showPopup = monster => this.setState({ popup: true, popupData: monster });

  closePopup = () => this.setState({ popup: false, popupData: [] });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    let popup = null;

    if (this.state.popup) {
      popup = <Popup monster={this.state.popupData} closePopup={() => this.closePopup()} />;
    }

    return (
      <div className="App">
        {popup}
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters..." handleChange={e => this.handleChange(e)} />
        <CardList monsters={filteredMonsters} showPopup={e => this.showPopup(e)} />
      </div>
    );
  }
}

export default App;
