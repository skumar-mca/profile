import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconTwitter = (props) => {
  return <BaseIcon {...props} d={IconPath.twitter} />;
};

export default memo(IconTwitter);
