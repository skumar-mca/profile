import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const HomeIcon = (props: any) => {
  return <BaseIcon {...props} d={IconPath.home_d1} d2={IconPath.home_d2} />;
};

export default memo(HomeIcon);
