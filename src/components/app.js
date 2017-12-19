import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WheaterList from '../containers/wheather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WheaterList />
      </div>
    );
  }
}
