import React, { Component } from 'react';
import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { fetchUsers } from '../services/userService';
import { UserList } from "./users/UserList";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listView: true,
      users: []
    }
  }


  loadData = () => {
    fetchUsers()
      .then(users => {
        this.setState({     //setujemo listu koju smo fetch
          users: users
        })
        //console.log(this.state.users);
      })
  }


  componentDidMount() {
    this.loadData()
  }


  checkListView = (view) => {
    if (view === false) {
      this.setState({ listView: true })
      localStorage.setItem("listView", this.state.listView )
    } else {
      this.setState({
        listView: false
      })
      localStorage.setItem("listView", this.state.listView )
    }
  }


  render() {

    return (
      <React.Fragment>
        <Header layout={this.checkListView} state={this.state.listView} loadData={this.loadData} />
        <UserList state={this.state.listView} users={this.state.users} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
