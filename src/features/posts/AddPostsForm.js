/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdded(title, content, userId),
      );
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="form__container">
      <h2>Add a New Post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle" className="label">
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor" className="label">
          Author:
        </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""> </option>
          {userOptions}
        </select>
        <label htmlFor="postContent" className="label">
          Content:
        </label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit" disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostsForm;
