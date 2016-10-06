import React, { Component } from 'react';
import ReactAddonsCSSTransitionGroup from 'react-addons-css-transition-group';

// application.html.erb
  // {this.props.children} === <%= yield %>

class Main extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ textAlign: 'center' }}>
        <ReactAddonsCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            { React.cloneElement(
                this.props.children,
                { key: this.props.location.pathname }
              ) }
        </ReactAddonsCSSTransitionGroup>
      </div>
    );
  }
}

export default Main;
