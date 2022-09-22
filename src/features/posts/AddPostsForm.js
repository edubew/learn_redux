/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content),
      );

      setTitle('');
      setContent('');
    }
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postTitle">Content:</label>
        <textarea
          id="postTitle"
          name="postTitle"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit" onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostsForm;
