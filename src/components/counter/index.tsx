import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

interface Props {}

export const Counter = (props: Props) => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <Typography variant={'h3'}>
      {'The app has been open for ' + count + ' seconds'}
    </Typography>
  );
};
