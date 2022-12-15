import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconLinkedIn = (props) => {
  return <BaseIcon {...props} d={IconPath.linkedin} />;
};

export default memo(IconLinkedIn);
