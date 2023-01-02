import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconHalfCircle = (props: any) => {
  return <BaseIcon {...props} d={IconPath.halfCircle} />;
};

export default memo(IconHalfCircle);
