// themeHooks.js

import { useSelector } from 'react-redux';
import { selectTheme, themeColors } from '../redux/themeSlice';

export const useThemeColors = () => {
    const theme = useSelector(selectTheme);
    return themeColors[theme];
};


export const useThemeObject = (property, color) => {
    const theme = useThemeColors();
    return {property: theme.color};
};

