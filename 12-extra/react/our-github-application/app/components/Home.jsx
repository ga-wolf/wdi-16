import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  pickRandomStudent(e) {
    const studentUsernames = [ "andybluey", "arpanbhalla", "howardmann", "jonginbae", "lucasvilela", "peter-fagan", "priyankakumbha", "skal9606", "stevegibbs", "pomhaffs", "gingernutter" ];
    const randomIndex = Math.floor(Math.random() * studentUsernames.length);
    const chosenStudent = studentUsernames[ randomIndex ];
    this.context.router.push( `/details/${chosenStudent}` );
  }
  render() {
    return (
      <div>
        <h3><em>Welcome to our Github app</em></h3>
        <p>This will display a basic user profile for a given user</p>
        <p>
          <Link to="/search">
            <button className="button-primary">Search for a user</button>
          </Link>
          &nbsp;
          <button
            className="button-primary"
            onClick={this.pickRandomStudent.bind(this)}>
            Pick a random student
          </button>
        </p>
      </div>
    );
  }
}
Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Home;
