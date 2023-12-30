//react
import React, { useState, useEffect } from "react";
//mock-api 
import { getUsers, getOrganizations } from "./mock-backend/api";
//components
import OrganizationSelector from "./components/OrganizationSelector";
import UserItem from "./components/UserItem";

// Helpers
// Generic fetch function, aligning with the DRY principle for data fetching.
import fetchData from "./helpers/fetchData"

const App = () => {
  // State management using the useState hook for a functional component approach.
  let [loading, setLoading] = useState(false);
  let [users, setUsers] = useState([]);
  let [organizations, setOrganizations] = useState([]);
  let [selectedOrg, setSelectedOrg] = useState(null);

  // useEffect hook replaces componentDidMount for handling side effects.
  useEffect(() => {
    fetchData(getUsers, setUsers, setLoading);
  }, []);

  useEffect(() => {
    fetchData(getOrganizations, setOrganizations, setLoading);
  }, []);

  const handleSelectOrg = (usersOrganizationId) => {
    // Efficiently finds and sets the selected organization reducing time complexity.
    const currentlySelectedOrg = organizations.find(org => org.id === usersOrganizationId);
    setSelectedOrg(currentlySelectedOrg);
    // Debugging statement to confirm the selected organization (Consider removing for production).
    console.log('Selected organization:', currentlySelectedOrg.name);
  };  

  const resetSelectedOrg = () => {
    // Resets the state of the selected organization.
    setSelectedOrg(null);
  };

  if (loading) return "Loading...";

  // Efficiently filters users based on the selected organization.
  const displayedUsers = selectedOrg ? 
  users.filter(user => user.organization === selectedOrg.id)
  : users;

  return (
    <div>
      {selectedOrg && (
        // Modular component for selecting organizations, improving code readability and reusability.
        <OrganizationSelector resetSelectedOrg={resetSelectedOrg}/>
      )}
      {displayedUsers.map(user => (
        // Using a key prop for efficient list rendering and wrapping the user item with a clickable div.
        <div className="user-list" onClick={() => handleSelectOrg(user.organization)}>
          <UserItem  
            key={user.id} 
            user={user}
            organizations={organizations}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
