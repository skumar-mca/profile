import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconPath } from './icons.path';

const IconWhatsapp = (props: any) => {
  return <BaseIcon {...props} d={IconPath.whatsapp} />;
};

export default memo(IconWhatsapp);
