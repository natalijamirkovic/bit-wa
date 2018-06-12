import React from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { About } from './about/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './home/Home';
import { Authors } from './authors/Authors';
import { SingleAuthor } from './singleAuthor/SingleAuthor';
import { SinglePost } from './singlePost/SinglePost';
import { NewPost } from './newPost/NewPost';




export const App = () => {


  return (
    <React.Fragment>
     
      <Header />
    
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/authors" component={Authors}/>
      <Route path="/posts/new" component={NewPost} />
      <Route path="/authors/:id" component={SingleAuthor} />
      <Route path="/posts/:id" component={SinglePost} />
      <Redirect from='/' to='/home' />
      
      </Switch>
     
      
       <Footer />
      
    </React.Fragment>
  )
}