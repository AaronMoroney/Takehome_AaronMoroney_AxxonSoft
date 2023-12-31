//react
import React from "react";

const UserItem = ({ user, organizations }) => {
    
    // Directly accessing the user's organization using the organization id from the user object
    const userOrganization = organizations[user.organization];

    return (
        <div className="user-list-item">
            {/* 
            ** these Divs should be changed to meaningful JSX 
            ** e.g <h1>, <p> etc, however this will alter the UI 
            ** I decided to keep the UI consistent with Original
            **/}
            <div>Name: {user.name}</div>
            <div>Organization: {userOrganization ? userOrganization.name : "Not Found"}</div>
        </div>
    );
}

export default UserItem