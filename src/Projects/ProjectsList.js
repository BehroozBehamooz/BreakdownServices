import React, { useState } from "react";
import  Project from "./Project.js";
import "./projects.css";


function ProjectsList(){
    const { projects:imported  } = require("./projects.json");
    const importedProjectsWithId = imported.map((importedProject,i)=>{
        importedProject.id = i;
        return importedProject;
    });
    const [projects, setProjects] = useState(importedProjectsWithId);
    const [selectedIds, setSelectedIds] = useState(() => new Set());
    const handleCheckBoxChange = (id, checked) =>{
        if (checked){
            console.log("handleCheckBoxChange > selectedIds: ",selectedIds);
            setSelectedIds((selectedIds) => new Set(selectedIds).add(id));
        }else{
            console.log("handleCheckBoxChange > selectedIds: ",selectedIds);
            setSelectedIds(selectedIds => {
                const tempSet = new Set(selectedIds);
                tempSet.delete(id);
                return tempSet;
            });
        }
    }
    const handleSubmit = () => {
        console.log("handleSubmit: ", selectedIds);
        const selectedProjects = ( projects.filter((project) => selectedIds?.has(project.id)) );
        console.log(selectedProjects);
    }
    const handlePostDateClick= () =>{
        const sortedProjects = projects.sort((a, b) => {
            const aDate = new Date(a.postedDate);
            const bDate = new Date(b.postedDate);
            if (aDate.valueOf() <  bDate.valueOf()) {
              return -1;
            }else{
                return 1;
            }
        });
        setProjects([...sortedProjects]);
    }
    return (
        <section className="container">
            <div className="title">Projects</div>
            <table className="table">
                <thead className="tableHead">
                    <tr className="row">
                        <th >{" "}</th>
                        <th >Name</th>
                        <th >Type</th>
                        <th >Casting Director</th>
                        <th onClick={handlePostDateClick} className="postDate">Post Date</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {projects.map((project, index) => 
                        <Project project={project} id={project.id} checked={selectedIds.has(project.id)} handleCheckBoxChange={handleCheckBoxChange} key={index}/> )
                    }
                </tbody>
            </table>
            <button className="btn" onClick={handleSubmit}>Submit</button>
        </section>
    );
}

export default ProjectsList;