import React from "react";
import  Project from "./Project.js";
import "./projects.css";

var { projects } = require("./projects.json");

function ProjectsList(){
    const selectedIds = new Set();
    const handleCheckBoxChange = (id, checked) =>{
        if (checked){
            selectedIds.add(id);
        }else{
            selectedIds.delete(id);
        }
    }
    const handleSubmit = () => {
        const selectedProjects = ( projects.filter((project, index) => selectedIds.has(index)) );
        console.log(selectedProjects);
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
                        <th >Post Date</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {projects.map((project, index) => 
                            <Project project={project} id={index} handleCheckBoxChange={handleCheckBoxChange} key={index}/> )
                    }
                </tbody>
            </table>
            <button className="btn" onClick={handleSubmit}>Submit</button>
        </section>
    );
}

export default ProjectsList;