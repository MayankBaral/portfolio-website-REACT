import React from "react";
import { Link } from 'react-router-dom';
function Projectcard(props){
    const {id,title,imageurl,tool}=props.projects;
    return(
        <div className="card h-100">
            <img className="card-img-top" src={imageurl} alt={title}/>
            <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{tool}</p>
            <Link to={'/project/${id}'} className="stretched-link"></Link>
            </div>
        </div>
        )}
export default Projectcard;