import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Routes from './config/Routes.js';

// import Avatar from './components/Avatar.js';
// import Home from './components/Home.jsx';
// import Main from './components/Main.js';

// const USER_DATA = {
//   imageURL: 'https://avatars.githubusercontent.com/u/4732?v=3',
//   username: 'jashkenas',
//   name: 'Jeremy Ashkenas'
// };

ReactDOM.render(
  Routes,
  document.getElementById('app')
);
