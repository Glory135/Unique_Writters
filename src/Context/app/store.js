import { configureStore } from '@reduxjs/toolkit';
import extraReducer from '../features/extraSlice';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		extra: extraReducer,
	},
});

export default store;
