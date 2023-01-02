import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const ListIcon = (props: any) => {
  return <BaseIcon {...props} d={IconPath.list} />;
};

export default memo(ListIcon);
