import React from 'react';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Hero';
import NavBar from '../../components/navbar/NavBar';
import Post from '../../components/posts/Post';

function Blog() {
  return <div id='blog'>
      <NavBar/>
      <Hero image="https://images.unsplash.com/photo-1623058292454-e79c5601cee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmclMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" content="Welcome to acm mits Blogs" />
      <Post val = {"i"}/>
      <Footer/>
  </div>;
}

export default Blog;
