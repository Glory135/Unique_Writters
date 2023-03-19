import { createSlice } from '@reduxjs/toolkit';

const themeInitialState = {
	light: false,
	dark: false,
	theme: {
		primary: '',
		secondary: '',
		tertiary: '',
		bg: '',
		text: '',
	},
};

const themeSlice = createSlice({
	name: 'theme',
	initialState: themeInitialState,
	reducers: {
		darkMode: (state) => {
			// set theme in localstorage
			localStorage.setItem('theme', 'dark');
			// update state
			state.light = false;
			state.dark = true;
			state.theme = {
				primary: '#1F1F1F',
				secondary: '#F50057',
				tertiary: '#1F1F1F',
				bg: '#121212',
				text: 'white',
			};
		},
		lightMode: (state) => {
			// set theme in localstorage
			localStorage.setItem('theme', 'light');
			// update states
			state.light = true;
			state.dark = false;
			state.theme = {
				primary: '#6200EE',
				secondary: '#F50057',
				tertiary: '#F6F6F6',
				bg: 'white',
				text: '#000000',
			};
		},
	},
});

export default themeSlice.reducer;
export const { darkMode, lightMode } = themeSlice.actions;
