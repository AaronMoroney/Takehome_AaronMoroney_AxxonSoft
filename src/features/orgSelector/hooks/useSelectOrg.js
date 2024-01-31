import { useState, useCallback, useMemo, useEffect } from "react";
import fetchData from "../helpers/fetchData";
import { getUsers, getOrganizations } from "../../../mock-backend/api";

export function useSelectOrg(){
    let [selectedOrg, setSelectedOrg] = useState(null);
    let [organizations, setOrganizations] = useState([]);
    let [loading, setLoading] = useState(false);
    let [users, setUsers] = useState([]);

    //fetchData coming from helpers
    useEffect(() => {
        fetchData(getUsers, setUsers, setLoading);
        fetchData(getOrganizations, setOrganizations, setLoading);
    }, []);

    const handleSelectOrg = useCallback((usersOrganizationId) => {
        const currentlySelectedOrg = organizations.find(org => org.id === usersOrganizationId);
        setSelectedOrg(currentlySelectedOrg);
    }, [organizations]);
 
    const resetSelectedOrg = () => {
        setSelectedOrg(null);
    };

    return useMemo(
        () => ({
            users,
            setLoading,
            loading,
            setUsers,
            selectedOrg,
            organizations,
            handleSelectOrg,
            resetSelectedOrg,
        }),
        [handleSelectOrg, resetSelectedOrg, organizations, selectedOrg, users, setUsers, setLoading, loading]
    );
}