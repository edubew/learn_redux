import { parseISO, formatDistanceToNow } from 'date-fns';

import React from 'react';

// eslint-disable-next-line react/prop-types
const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp;
      {' '}
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
