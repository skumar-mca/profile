import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconFacebook = (props) => {
  return <BaseIcon {...props} d={IconPath.facebook} />;
};

export default memo(IconFacebook);
