import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: [],
};

const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
        setOrganization: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;