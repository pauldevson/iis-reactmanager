import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const sleep = async ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));
