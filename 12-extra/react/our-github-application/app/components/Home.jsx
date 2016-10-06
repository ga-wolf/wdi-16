import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to our Github app</h3>
        <p>This will display a basic user profile for a given user</p>
        <p>
          <button>Search for a user</button>
          <button>Pick a random student</button>
        </p>
      </div>
    );
  }
}

export default Home;
