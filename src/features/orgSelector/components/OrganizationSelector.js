//react
import React from "react";

//components
import { useSelectOrg } from "../hooks/useSelectOrg";
import UserItem from "./UserItem";
import ResetOrganization from "./ResetOrganization";

const OrganizationSelector = () => {
  let { handleSelectOrg, resetSelectedOrg, selectedOrg, organizations, users, loading } = useSelectOrg();
  
  const displayedUsers = selectedOrg ? 
  users.filter(user => user.organization === selectedOrg.id)
  : users || [];

  if (loading) return "Loading...";

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