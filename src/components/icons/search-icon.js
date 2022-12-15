import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const SearchIcon = (props) => {
  return <BaseIcon {...props} d={IconPath.search} />;
};

export default memo(SearchIcon);