import React from 'react';
import { THEME_CONSTANT } from './app-constants';
const context = { theme: THEME_CONSTANT.LIGHT_THEME };
export const AppContext = React.createContext(context);
