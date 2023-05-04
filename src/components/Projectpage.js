import React from 'react'
import { Consumer } from '../Context'
import ReactMarkdown from "react-markdown";
export default function Projectpage(props) {
  return (
    <Consumer>
      {(value)=>{
        const{project}=value;
        const id=props.match.params.id;
        const projects = project.filter((projects)=>projects.id===id)[0];
        const {imageurl,title,tool}=projects;
        return(
          <div className='container text-center pt-5 my-5'>
          <div className="justify-content-center">
          <img src={imageurl} alt={title} className="w-100" />
          <h1>{title}</h1>
          <ReactMarkdown source={tool}/>
          </div>
          </div>
        )
      }
      }
    </Consumer>
  )
}
