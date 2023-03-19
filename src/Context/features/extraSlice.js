import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mobile: 700,
};

const extraSlice = createSlice({
	name: 'extra',
	initialState,
});


export default extraSlice.reducer