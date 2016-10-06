import React, { Component } from 'react';
import GithubHelpers from '../utils/GithubHelpers.js';

import UserProfile from './UserProfile.js';
import UserRepositories from './UserRepositories.js';

class UserDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    const username = this.props.routeParams.username;
    GithubHelpers.getUserInfo(username).then( function (info) {
      this.setState({
        user: info.data
      });
    }.bind(this) );

    GithubHelpers.getUserRepos(username).then( function (info) {
      this.setState({
        repos: info.data
      });
    }.bind(this) );
  }
  render() {
    return (
      <div>
        <h3><em>{this.props.routeParams.username}</em></h3>
        <UserProfile user={this.state.user} />
        <hr />
        <UserRepositories repos={this.state.repos} />
      </div>
    );
  }
}

export default UserDetailsContainer;
