/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '😍',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionsButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="submit"
      className="reaction__button"
      onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
    >
      {emoji}
      {' '}
      {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
};

export default ReactionsButtons;
