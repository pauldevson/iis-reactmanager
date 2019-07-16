import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { CollisionLink } from 'utils';

const navItems = [
  {
    id: 0,
    displayName: 'Web Sites',
    url: '/server/web-sites',
    icon: 'language'
  },
  {
    id: 1,
    displayName: 'Root Site',
    url: '/server/root-site',
    icon: 'kitchen'
  },
  {
    id: 2,
    displayName: 'Files',
    url: '/server/files',
    icon: 'folder'
  },
  {
    id: 3,
    displayName: 'Monitoring',
    url: '/server/monitoring',
    icon: 'show_chart'
  }
];

const NavListItems = () => {
  return navItems.map((item, index) => (
    <ListItem button key={item.id} component={CollisionLink} to={item.url}>
      <ListItemIcon>
        <Icon>{item.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={item.displayName} />
    </ListItem>
  ));
};

const NavList = () => <div>{NavListItems()}</div>;

export default NavList;
