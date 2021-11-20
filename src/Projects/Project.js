import React, { useState } from "react";

function Project({ project, id, handleCheckBoxChange }) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
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
