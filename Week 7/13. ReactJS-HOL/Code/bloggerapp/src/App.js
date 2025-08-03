import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState('');

  // 1. Element variable method
  let content;
  if (selected === 'book') {
    content = <BookDetails />;
  } else if (selected === 'blog') {
    content = <BlogDetails />;
  } else if (selected === 'course') {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>

      {/* Buttons to switch components */}
      <button onClick={() => setSelected('book')}>Book Details</button>
      <button onClick={() => setSelected('blog')}>Blog Details</button>
      <button onClick={() => setSelected('course')}>Course Details</button>
      <button onClick={() => setSelected('')}>Clear</button>

      <hr />

      {/* 2. Ternary Operator */}
      {selected === '' ? (
        <p>Select a section to view details.</p>
      ) : (
        content
      )}

      {/* 3. Short-circuit rendering */}
      {selected === 'hidden' && <p>This will never show, demo only.</p>}
    </div>
  );
}

export default App;
