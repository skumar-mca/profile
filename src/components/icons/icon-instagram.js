import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconInstagram = (props) => {
  return <BaseIcon {...props} d={IconPath.instagram} />;
};

export default memo(IconInstagram);
