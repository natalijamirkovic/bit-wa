import React, { Component } from 'react';
import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { fetchUsers } from '../services/userService';
import { UserList } from "./users/UserList"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// fetchUsers()               provjeravam usere
// .then((myUsers) => {
// console.log(myUsers) 
// })

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <UserList />
      <Footer />
    </React.Fragment>
  )
}

export default App;
