import React, { Component } from 'react';

class UserRepositories extends Component {
  render() {
    if ( !this.props.repos ) {
      return (
        <div>Loading...</div>
      );
    }
    let userRepos = this.props.repos.map((r) => {
      return (
        <li key={r.id}>
          <a href={r.html_url} target="_blank">
            {r.name}
          </a>
        </li>
      );
    });
    return (
      <div>
        <h5>User Repositories</h5>
        <ul>
          {userRepos}
        </ul>
      </div>
    );
  }
}

export default UserRepositories;
