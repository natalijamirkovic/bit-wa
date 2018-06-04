import React from 'react';
import logo from './logo.svg';


import Header from "./partials/Header";
import Footer from "./partials/Footer";

import {UserCard} from "./users/UserCard";
import {UserGrid} from "./users/UserGrid";

import usersData from "./../data/data";
import { getUsers } from '../service/userService';

const App = (props) => {

    const users = getUsers();
    console.log(users);

  return (
      <React.Fragment>
          <Header myTitle={"React Users"} />
          <UserGrid users = {users} />
          <Footer />
      </React.Fragment>
  )
}


export default App;
