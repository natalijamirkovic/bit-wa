import React, { Component } from 'react';
import logo from './logo.svg';


import Header from "./partials/Header";
import Footer from "./partials/Footer";

import PostItem from "./posts/PostItem";
import PostList from "./posts/PostsList";

import posts from "./../data/data";

const App = () => {


  return (
    <React.Fragment>
      <Header myTitle={"Bit Posts"} />
      <PostList myPosts={posts} />
      <Footer />
    </React.Fragment>
  )


}

export default App;
