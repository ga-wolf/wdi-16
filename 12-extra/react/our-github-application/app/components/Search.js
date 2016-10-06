import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  updateSearch(e) {
    this.setState({ // Explicit mutations
      text: e.currentTarget.value
    });
  }
  handleSubmit(e) {
    const searchQuery = this.state.text;
    this.context.router.push( `/details/${searchQuery}` );
  }
  render() {
    return (
      <div>
        <h3><em>Search</em></h3>
        <input
          type="text"
          name="search"
          value={this.state.text}
          onChange={this.updateSearch.bind(this)}
          placeholder='Username: ' />
        <br />
        <input
          type="submit"
          className="button-primary"
          onClick={this.handleSubmit.bind(this)}
          value={`Search for ${this.state.text}`} />
      </div>
    );
  }
}
Search.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Search;
