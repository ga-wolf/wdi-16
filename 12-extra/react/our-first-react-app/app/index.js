import React from 'react';
import ReactDOM from 'react-dom';

// class SomeComponent extends React.Component {
//   render() {
//     return (<p></p>);
//   }
// }

// var SomeComponent = React.createClass({
//   render: function () {
//     return (<p></p>);
//   }
// });

// To move data between components
  // Props
// Within a component
  // Use state to change the presentation



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

class ShowTodos extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    window.setTimeout(function () {
      this.setState({ // Explicit Mutations
        loading: false
      });
    }.bind(this), 1000);
  }
  render() {
    if ( !this.state.loading ) {
      let todosItems = this.props.todos.map((t) => {
        return (
          <li key={Math.random()}>{t}</li>
        );
      });
      return (
        <ul>{todosItems}</ul>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }
}

ShowTodos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  number: React.PropTypes.number
};
ShowTodos.defaultProps = {
  todos: [],
  number: 42
};

class TodosContainer extends React.Component {
  render() {
    let todos = [
      "Watch Satantango",
      "Second todo",
      "Third todo",
      "Fourth todo"
    ];
    return (
      <div>
        <h1>All Todos</h1>
        <ShowTodos number={42} />
      </div>
    );
  }
}

// ReactDOM.render(
//   <TodosContainer />,
//   document.getElementById('app')
// );

class ChildComponent extends React.Component {
  constructor() {
    super();
    console.log("\tChildComponent: constructor()");
    console.log("\tChildComponent: getInitialState()");
  }
  componentWillMount() {
    console.log("\tChildComponent: componentWillMount()");
  }
  render() {
    console.log("\tChildComponent: render()");
    return (
      <p>Child Component: {this.props.text}</p>
    );
  }
  componentDidMount() {
    console.log("\tChildComponent: componentDidMount()");
  }
  componentWillUnmount() {
    console.log("\tChildComponent: componentWillUnmount()");
  }
  componentWillReceiveProps(nextProps) {
    // The properties have been updated
    console.log("\tChildComponent: componentWillReceiveProps()");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // When you are changing lots of HTML, this is a good thing to customize
    console.log("\tChildComponent: shouldComponentUpdate()");
    return true;
  }
  componentWillUpdate() {
    // React is about to start updating your page with the new component markup
    console.log("\tChildComponent: componentWillUpdate()");
  }
  componentDidUpdate(previousProps, previousState, nextProps, nextState) {
    // React has changed the HTML - it is now visible to the user
    console.log("\tChildComponent: componentDidUpdate");
  }
}
ChildComponent.defaultProps = {}; // getDefaultProps
ChildComponent.propTypes = {}; // propTypes

class ParentComponent extends React.Component {
  constructor() {
    super();
    console.log("ParentComponent: constructor()");
    console.log("ParentComponent: getInitialState()");
    this.state = {
      text: ''
    };
  }
  componentWillMount() {
    // AJAX calls, anything that takes a bit of time
    console.log("ParentComponent: componentWillMount()");
  }
  render() {
    console.log("ParentComponent: render()");
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.text}
          onChange={this.onInputChange.bind(this)} />
        <ChildComponent text={this.state.text} />
      </div>
    );
  }
  componentDidMount() {
    // The HTML is on the page and visible
    console.log("ParentComponent: componentDidMount()");
  }
  componentWillUnmount() {
    // This component is about to be removed to the page
      // Turn off timers, stop animations
    console.log("ParentComponent: componentWillUnmount()");
  }
  onInputChange(e) {
    const letter = e.target.value;
    this.setState({ // Explicit mutation
      text: letter
    });
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('app')
);
