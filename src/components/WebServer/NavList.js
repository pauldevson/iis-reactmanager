import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { CollisionLink } from 'utils';

const navItems = [
  {
    id: -1,
    displayName: 'General',
    url: '/server/general',
    icon: 'build'
  },
  {
    id: 0,
    displayName: 'Web Sites',
    url: '/server/websites',
    icon: 'public'
  },
  {
    id: 1,
    displayName: 'Application Pools',
    url: '/server/application-pools',
    icon: 'memory'
  },
  {
    id: 2,
    displayName: 'Files',
    url: '/server/files',
    icon: 'folder'
  },
  {
    id: 3,
    displayName: 'Authentication',
    url: '/server/authentication',
    icon: 'fingerprint'
  },
  {
    id: 4,
    displayName: 'Authorization',
    url: '/server/authorization',
    icon: 'verified_user'
  },
  {
    id: 5,
    displayName: 'Certificates',
    url: '/server/certificates',
    icon: 'lock'
  },
  {
    id: 6,
    displayName: 'Central Certificate Store',
    url: '/server/central-certificate-store',
    icon: 'security'
  },
  {
    id: 7,
    displayName: 'Default Documents',
    url: '/server/default-documents',
    icon: 'description'
  },
  {
    id: 8,
    displayName: 'Directory Browsing',
    url: '/server/directory-browsing',
    icon: 'folder_open'
  },
  {
    id: 9,
    displayName: 'IP Restrictions',
    url: '/server/ip-restrictions',
    icon: 'block'
  },
  {
    id: 10,
    displayName: 'Logging',
    url: '/server/logging',
    icon: 'create'
  },
  {
    id: 11,
    displayName: 'Mime Maps',
    url: '/server/mime-maps',
    icon: 'import_export'
  },
  {
    id: 12,
    displayName: 'Monitoring',
    url: '/server/monitoring',
    icon: 'trending_up'
  },
  {
    id: 13,
    displayName: 'Modules',
    url: '/server/modules',
    icon: 'view_module'
  },
  {
    id: 14,
    displayName: 'Response Compression',
    url: '/server/response-ompression',
    icon: 'compare_arrows'
  },
  {
    id: 15,
    displayName: 'Request Filtering',
    url: '/server/request-filtering',
    icon: 'filter_list'
  },
  {
    id: 16,
    displayName: 'Response Headers',
    url: '/server/response-headers',
    icon: 'replay'
  },
  {
    id: 17,
    displayName: 'Request Tracing',
    url: '/server/request-tracing',
    icon: 'flag'
  },
  {
    id: 18,
    displayName: 'Static Content',
    url: '/server/static-content',
    icon: 'crop_portrait'
  },
  {
    id: 19,
    displayName: 'Url Rewrite',
    url: '/server/url-rewrite',
    icon: 'folder'
  }
];

const NavListItems = props => {
  const { selectedItem } = props;
  const [fullOptions, setFullOptions] = useState(false);
  const showItems = fullOptions ? navItems : navItems.slice(0, 14);

  function toggleFullOptions() {
    setFullOptions(!fullOptions);
  }

  return (
    <>
      {showItems &&
        showItems.map((item, index) => (
          <ListItem
            button
            key={item.id}
            component={CollisionLink}
            to={item.url}
            selected={item.id === selectedItem}
            dense
          >
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.displayName} />
          </ListItem>
        ))}
      <ListItem
        button
        key={'show-full-options'}
        component={CollisionLink}
        onClick={toggleFullOptions}
        dense
      >
        <ListItemIcon>
          <Icon>{fullOptions ? 'expand_less' : 'expand_more'}</Icon>
        </ListItemIcon>
        <ListItemText primary={fullOptions ? 'Show less...' : 'Show more...'} />
      </ListItem>
    </>
  );
};

const NavList = props => <div>{NavListItems(props)}</div>;

NavList.propTypes = {
  selectedItem: PropTypes.number
};

NavList.defaultPropTypes = {
  selectedItem: -1
};

export default NavList;
