import { IconButton } from '@material-ui/core';
import { Share } from '@material-ui/icons';
import React, { useState } from 'react';
import { useShareButtonStyles } from './styles';

export const ShareButton = () => {
  const classes = useShareButtonStyles();
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <IconButton
      color={success ? 'secondary' : undefined}
      className={classes.alignLeft}
      onClick={(e) => {
        setSuccess(true);
        if ('share' in navigator) {
          navigator.share({
            url: 'https://doddydigitaldesign.github.io/react-snowpack',
          });
          return;
        }
        (navigator as Navigator).clipboard.writeText(
          'https://doddydigitaldesign.github.io/react-snowpack',
        );
      }}
    >
      <Share />
    </IconButton>
  );
};
