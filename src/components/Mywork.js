import React from "react";
import Projectcard from "./Projectcard";
import {v4 as uuid} from 'uuid';
import {Consumer} from "../Context" 
import { Link } from "react-router-dom";
/*
    In this section we are using props to reuse the components(Projectcard). The objects is passed inside the array,
    which is called by different component that has the structure(Projectcard)
*/
function Mywork(){
    return(
        <Consumer>
            { value =>{
                const{project}=value;
                return(
                    <>      
                    <div className="container-fluid text-center py-3 px-0 text-light bg-dark">
                    <h1>My <span className="text-info">Work</span> </h1>
                    <div className="work">These are my latest works in Adobe Illustrator</div>
                    </div>
                    <div className="container text-center mt-4 pb-5">
                    <div className="row mt-2 pt-3">
                        {project.map((projects) => (
                    <div key={uuid()} className="col-12 col-md-4">
                    <Projectcard projects={projects} />
                    </div>
                    ))}
                    <div className="text-end pt-3">
                    <Link to={"/allproject"} className="seemore text-dark">See More </Link>
                    </div>
                    </div>  
                    </div>
                    </>)}}
        </Consumer>
        )}
export default Mywork;