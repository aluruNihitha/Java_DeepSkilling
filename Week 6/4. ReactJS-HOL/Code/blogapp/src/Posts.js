import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Getting Started with React',
          body: 'React is a JavaScript library for building user interfaces. Let’s explore how it works.'
        },
        {
          id: 2,
          title: 'Understanding Components',
          body: 'Components let you split the UI into independent, reusable pieces. Each component is like a function.'
        },
        {
          id: 3,
          title: 'Using Props in React',
          body: 'Props are inputs to components. They are passed from parent to child and are read-only.'
        },
        {
          id: 4,
          title: 'State in Class Components',
          body: 'State allows components to change their output over time in response to user actions.'
        },
        {
          id: 5,
          title: 'Lifecycle Methods in React',
          body: 'Lifecycle methods are functions you can override to run code at particular times in a component’s life.'
        }
      ],
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong in the Posts component.");
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error loading posts.</h1>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
