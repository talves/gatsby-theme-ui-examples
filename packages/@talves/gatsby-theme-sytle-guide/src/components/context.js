import { useThemeUI } from 'theme-ui';
export const useTheme = () => {
  const { theme } = useThemeUI();
  return theme;
};
