import Data from '@smartface/native/global/data';
import Application from '@smartface/native/application';
import { config } from 'settings.json';
import { clearCache } from '@smartface/extension-utils/lib/getCombinedStyle';
import { createThemeContextBound } from '@smartface/contx/lib/styling/ThemeContext';
const themeConfig = config.theme;
const currentTheme =
  Data.getStringVariable('currentTheme') || themeConfig.currentTheme;
const themeSources = themeConfig.themes.map((name) => ({
  name,
  rawStyles: require(`./generated/themes/${name}`),
  isDefault: currentTheme === name,
}));
Application['theme'] = createThemeContextBound(themeSources);
type ThemeListener = (themeName: string) => void;

const themeListeners = new WeakMap<{}, ThemeListener>();
const themeListenerKeys: {}[] = [];
const ThemeService = {
  onChange(listener: ThemeListener) {
    const key = {};
    themeListenerKeys.push(key);
    themeListeners.set(key, listener);
    const deletionIndex = themeListenerKeys.length - 1;

    return () => {
      if (themeListeners.has(key)) {
        themeListeners.delete(key);
        themeListenerKeys.splice(deletionIndex, 1);
      }
    };
  },
  changeTheme(name: string) {
    Application['theme']()({
      type: 'changeTheme',
      theme: name,
    });
    clearCache();
    themeListenerKeys.forEach((key) => {
      if (themeListeners.has(key)) {
        themeListeners.get(key)(name);
      }
    });
  },
};