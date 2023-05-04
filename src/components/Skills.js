import React from 'react'
import {v4 as uuid} from 'uuid'
function Skills (props) {
    const{name,imageurl,startotal,staractive}=props.skill;
    let starlist=[]
    for(let i=0;i<startotal;i++)
    {
      if(i<staractive)
      starlist.push(<span key={uuid()} className='text-info'>"★"</span>)
      else
      starlist.push(<span key={uuid()} className='text-dark'>"★"</span>)
    }
    console.log(starlist)
  return (
    <div>
        <img 
        className='rounded-circle  h-75'
        src={imageurl} 
        alt={name}
        style={{height:"100px",width:"100px"}}
        />
        <div>{starlist}</div>
    </div>
  )
}
export default Skills;

/*
import React from "react";
import { v4 as uuid } from "uuid";

function Skills(props) {
  const { name, imageUrl, starsTotal, starsActive } = props.skill;

  const starsList = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starsList.push(
        <span key={uuid()} className="text-info">
          ★
        </span>
      );
    } else {
      starsList.push(<span key={uuid()}>★</span>);
    }
  }
  return (
    <div>
      <img
        className="rounded-circle"
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <div>{starsList}</div>
    </div>
  );
}
export default Skills;
*/