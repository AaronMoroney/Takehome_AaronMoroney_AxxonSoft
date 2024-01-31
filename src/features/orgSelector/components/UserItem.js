//react
import React from "react";

const UserItem = ({ user, organizations }) => {
    const userOrganization = organizations[user.organization];

    return (
        <div className="user-list-item">
            <div>Name: {user.name}</div>
            <div>Organization: {userOrganization ? userOrganization.name : "Not Found"}</div>
        </div>
    );
}

export default UserItem