import { configureStore } from '@reduxjs/toolkit';
import selectedOrgReducer  from '../features/orgSelector/slices/selectedOrgSlice';
import loadingReducer  from '../features/orgSelector/slices/loadingSlice';
import organizationReducer  from '../features/orgSelector/slices/organizationSlice';
import usersReducer  from '../features/orgSelector/slices/usersSlice';

export const store = configureStore({
    reducer: {
        selectedOrg: selectedOrgReducer,
        loading: loadingReducer,
        organization: organizationReducer,
        users: usersReducer,
    },
});