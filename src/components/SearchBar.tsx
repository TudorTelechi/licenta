import React from 'react';
import {SearchBar} from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search: any) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChange={this.updateSearch}
        value={search}
        onChange={this.updateSearch}
        platform={'default'}
        showLoading={false}
        lightTheme={false}
        round={false}
        cancelButtonTitle={''}
        showCancel={false}
      />
    );
  }
}
