//react
import React, { useState, useEffect, useCallback } from "react";
//mock-api 
import { getUsers, getOrganizations } from "../../../mock-backend/api";
//components
import UserItem from "./UserItem";
import fetchData from "../helpers/fetchData";
import ResetOrganization from "./ResetOrganization";

const OrganizationSelector = () => {
  let [loading, setLoading] = useState(false);
  let [users, setUsers] = useState([]);
  let [organizations, setOrganizations] = useState([]);
  let [selectedOrg, setSelectedOrg] = useState(null);
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

  if (loading) return "Loading...";

  const displayedUsers = selectedOrg ? 
  users.filter(user => user.organization === selectedOrg.id)
  : users;

  return (
    <div>
      {selectedOrg && (
        <ResetOrganization resetSelectedOrg={resetSelectedOrg}/>
      )}
      {displayedUsers.map(user => (
        <div 
          className="user-list" 
          key={user.id} 
          onClick={() => handleSelectOrg(user.organization)}
        >
          <UserItem  
            user={user}
            organizations={organizations}
          />
        </div>
      ))}
    </div>
  );
};

export default OrganizationSelector;