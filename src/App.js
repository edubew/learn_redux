import React from 'react';
import PostsList from './features/posts/PostsList';
import AddPostsForm from './features/posts/AddPostsForm';

const App = () => (
  <main>
    <AddPostsForm />
    <PostsList />
  </main>
);

export default App;
