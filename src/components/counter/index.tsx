import { Typography, TypographyProps } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export const Counter = (props: Omit<TypographyProps, 'children'>) => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <Typography component={'time'} {...props}>
      {count}
    </Typography>
  );
};
