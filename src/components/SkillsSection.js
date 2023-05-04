import React from 'react';
import {v4 as uuid} from 'uuid'
import { Consumer } from '../Context';
import Skills from './Skills';
export default function SkillsSection() {
    return(
        <Consumer>
            {value=>{
                const{skill}=value;
                const finalskillrow=[];
                for(let i=0;i<2;i++)
                {
                    let skillrow=skill.slice(i*4,(i+1)*4);
                    finalskillrow.push(
                        <div key={uuid()} className="d-flex justify-content-around py-5">
                            {
                                skillrow.map((skill) =>(
                                <Skills key={(uuid)} skill={skill}/>
                                ))
                            }
                        </div>
                    )}
                return(
                    <div>
                    <div class="container-fluid text-center pt-2 pb-3 px-0 text-light bg-dark">
                        <h1> My <span class="text-info">Skills</span> </h1>
                    </div>
                    <div id="skillimage" className="container my-0 p-0">
                    <div className="row m-2 ">
                        {finalskillrow}
                    </div>
                    </div>
                    </div>
                )
            }}
        </Consumer>
    )
}








/*import React from 'react'
import Skills from './Skills'

export default function SkillsSection() {
    const skill1=[
        {
            id: 1,
            name:"html",
            imageurl:"html2.jpg",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 2,
            name:"CSS",
            imageurl:"CSS3.png",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 3,
            name:"React",
            imageurl:"react.png",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 4,
            name:"Javascript",
            imageurl:"js.png",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 5,
            name:"Bootstrap",
            imageurl:"js.png",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 6,
            name:"Java",
            imageurl:"js.png",
            startotal:"3",
            staractive:"2",
        },
        {
            id: 7,
            name:"c++",
            imageurl:"js.png",
            startotal:"3",
            staractive:"2",
        }
    ];
    const finalskillrow=[];
    
    for(let i=0;i<2;i++){
        let skillrow=skill1.slice(i*4,(i+1)*4);
        finalskillrow.push(
            <div className='d-flex justify-content-around py-3'>
                {
                    skillrow.map((skill)=>{     
                    <Skills name={skill.name} imageurl={skill.imageurl} startotal={skill.startotal} staractive={skill.staractive} />
                    })
                }
            </div>
        )
    };
  return (
        <>
        <div className="container-fluid text-center pt-2 pb-3 px-0 text-light bg-dark">
        <h1>My <span className="text-info">Skills</span> </h1>
        </div>
        <div id="skillimage" className="container my-0 p-5">
        <div className="row m-2 p-2">
        <Skills>
            {finalskillrow}
        </Skills>    
        </div>
        </div>
        </>
  )
}*/
