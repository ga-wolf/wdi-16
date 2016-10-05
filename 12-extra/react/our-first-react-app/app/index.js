import React from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends React.Component {
  render() {
    console.log( this.props.name );
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <hr />
        <HelloUser name="Groucho" />
        <HelloUser name="Harpo" />
        <HelloUser name="Zeppo" />
      </div>
    );
  }
}

// ReactDOM.render(
//   <HelloUser name="Harpo" />,
//   document.getElementById('app')
// );
// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById("app")
// );
