import { useCallback, useMemo, useEffect } from "react";
import fetchData from "../helpers/fetchData";
import { getUsers, getOrganizations } from "../../../mock-backend/api";
//redux
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedOrg } from "../slices/selectedOrgSlice";
import { setLoading } from "../slices/loadingSlice";
import { setOrganization } from "../slices/organizationSlice";
import { setUsers } from "../slices/usersSlice";

export function useSelectOrg(){
    const selectedOrg = useSelector((state) => state.selectedOrg.current);
    const loading = useSelector((state) => state.loading.isLoading);
    const organizations = useSelector((state) => state.organization.current);
    const users = useSelector((state) => state.users.current);

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData(
            getUsers, //apiCall
            (response) => dispatch(setUsers(response)),
            () => dispatch(setLoading(true)), 
            () => dispatch(setLoading(false))
        );
        fetchData(
            getOrganizations, //apiCall
            (response) => dispatch(setOrganization(response)), 
            () => dispatch(setLoading(true)), 
            () => dispatch(setLoading(false))
        );
    }, [dispatch, getUsers, getOrganizations]);

    const handleSelectOrg = useCallback((usersOrganizationId) => {
        const currentlySelectedOrg = organizations.find(org => org.id === usersOrganizationId);
        dispatch(setSelectedOrg(currentlySelectedOrg));
    }, [dispatch, organizations]);//working according to devtools
 
    const resetSelectedOrg = () => {
     dispatch(setSelectedOrg(null));
    };

    return useMemo(
        () => ({
            users,
            loading,
            organizations,
            handleSelectOrg,
            resetSelectedOrg,
            selectedOrg,
        }),
        [handleSelectOrg, resetSelectedOrg, organizations, users, loading, selectedOrg]
    );
}