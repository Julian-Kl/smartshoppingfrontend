/*
// Import
 */
// React
import React, {useContext} from "react";

// Contexts
import LoginStatus from "../contexts/LoginContext";

/*
// Function
 */
function Preferences() {
    // Context User
    const {user} = useContext(LoginStatus);

    // Export
    return(
        <React.Fragment>
            <div className="bg-white mt-2">
                <h1>Präferenzen</h1>
                {user.id == 0 ? "Umwelt" : false}
                {user.id == 1 ? "Günstig" : false}
            </div>
        </React.Fragment>
    );
}

export default Preferences;
