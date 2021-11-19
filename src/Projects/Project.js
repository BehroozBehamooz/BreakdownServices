import React, { useState } from "react";

function Project({ project, id, handleCheckBoxChange }) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        handleCheckBoxChange(id, !checked);
        console.log("child: checked: ",!checked);
    }
    return (
        <tr>
        <td><input type="checkbox" checked={checked} onChange={handleChange}/></td>
        <td>{project.name}</td>
        <td>{project.type}</td>
        <td>{project.castingDirector}</td>
        <td>{project.postedDate}</td>
        </tr>
    );
}

export default Project;
