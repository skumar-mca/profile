import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const InfoIcon = (props) => {
  return <BaseIcon {...props} d={IconPath.info} />;
};

export default memo(InfoIcon);
