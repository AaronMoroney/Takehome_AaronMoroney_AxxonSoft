import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;