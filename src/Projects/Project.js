import React, { useState, useEffect } from "react";

function Project({ project, id, handleCheckBoxChange }) {
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        console.log("useEffect > project > id ",project, id);
        setChecked(false);
        handleCheckBoxChange(id, false);
    },[project]);
    const handleChange = () => {
        console.log("child > handleChange > id: ", id)
        setChecked(!checked);
        handleCheckBoxChange(id, !checked);
    }
    return (
        <tr className="row">
            <td><input type="checkbox" checked={checked} onChange={handleChange}/></td>
            <td className="upperCase">{project.name}</td>
            <td>{project.type}</td>
            <td>{project.castingDirector}</td>
            <td>{project.postedDate}</td>
        </tr>
    );
}

export default Project;
