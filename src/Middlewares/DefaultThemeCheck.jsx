import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { darkMode, lightMode } from '../Context/features/theme/themeSlice';

export const DefaultThemeCheck = () => {
	const dispatch = useDispatch();
	// to check theme after page reload
	const currentTheme = localStorage.getItem('theme');
	const themeCheck = useCallback(() => {
		const system_default_theme = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);
		if (currentTheme === 'dark') {
			dispatch(darkMode());
			// themeDispatch({ type: 'DARK_MODE' });
		} else if (currentTheme === 'light') {
			dispatch(lightMode());
			// themeDispatch({ type: 'LIGHT_MODE' });
		} else if (!currentTheme && system_default_theme.matches) {
			dispatch(darkMode());
			// themeDispatch({ type: 'DARK_MODE' });
		} else if (!currentTheme && !system_default_theme.matches) {
			dispatch(lightMode());
			// themeDispatch({ type: 'LIGHT_MODE' });
		}
	}, [currentTheme]);

	useEffect(() => {
		themeCheck();
	}, [themeCheck]);
    
	return null;
};
