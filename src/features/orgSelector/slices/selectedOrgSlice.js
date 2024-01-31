import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: null,
};

const selectedOrgSlice = createSlice({
    name: "selectedOrg",
    initialState,
    reducers: {
        setSelectedOrg: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { setSelectedOrg } = selectedOrgSlice.actions;
export default selectedOrgSlice.reducer;