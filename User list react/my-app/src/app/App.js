import React, { Component } from 'react';
import logo from './logo.svg';


import Header from "./partials/Header";
import Footer from "./partials/Footer";

import UserItem from "./users/UserItem";
import UserList from "./users/UserList";

import usersData from "./../data/data";

const App = (props) => {

  return (
      <React.Fragment>
          <Header myTitle={"React Users"} />
          <UserList myUsers={users} />
          <Footer />
      </React.Fragment>
  )
}


export default App;
