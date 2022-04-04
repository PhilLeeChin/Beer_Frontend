import React from "react";

function StyleCard({ username, served, appetizers}){
    return <div className="style">
        <p><strong>{username}</strong> added: </p>
        <p>{served}</p>
        <p>{appetizers}</p>
    </div>

}

export default StyleCard;