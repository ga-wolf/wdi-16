import React, { Component } from 'react';

// application.html.erb
  // {this.props.children} === <%= yield %>
  
class Main extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Main;
