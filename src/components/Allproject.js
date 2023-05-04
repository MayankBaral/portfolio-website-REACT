import React from 'react'
import { Consumer } from '../Context';
import Projectcard from './Projectcard'
export default function Allproject() {
  return (
        <Consumer>
            { value =>{
                const{project}=value;
                return(
                    <>   
                    <div className="container text-center mt-5 py-5">
                    <h1 className='pb-3'>My <span className='text-info'> Work</span></h1>
                    <div className="row mt-2 pt-3">
                        {project.map((projects) => (
                    <div  className="col-12 col-md-4">
                    <Projectcard projects={projects} />
                    </div>
                    ))}
                    </div>  
                    </div>
                    </>
                    )}}
        </Consumer>
        )
}
