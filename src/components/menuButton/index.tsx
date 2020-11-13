import { Icon, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

interface Props {}

export const MenuButton = (props: Props) => {
  return (
    <IconButton>
      <Icon>
        <Menu />
      </Icon>
    </IconButton>
  );
};
