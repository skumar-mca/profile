import { THEME_CONSTANT } from './app-constants';

export const THEME = {
  getTheme: () => {
    return (
      localStorage.getItem(THEME_CONSTANT.KEY) || THEME_CONSTANT.LIGHT_THEME
    );
  },
  setTheme: (themeValue: string) => {
    localStorage.setItem(THEME_CONSTANT.KEY, themeValue);
  }
};
