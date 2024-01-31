//react
import React from "react"; 

const ResetOrganization = ({resetSelectedOrg}) => {

    return (
        <>
            <button onClick={resetSelectedOrg}>
                Reset Selected Organization
            </button>
        </>
    );
}

export default ResetOrganization