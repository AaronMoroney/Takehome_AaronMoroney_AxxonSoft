//react
import React from "react"; 

const OrganizationSelector = ({resetSelectedOrg}) => {

    return (
        <>
            <button onClick={resetSelectedOrg}>
                Reset Selected Organization
            </button>
        </>
    );
}

export default OrganizationSelector