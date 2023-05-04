import React from "react";
function Title(){
    return(
        <div className="container-fluid pt-5 pb-5">
            <br/><br/> 
            <div className="row text-center align-items-center">
            <div className="col-12 col-md-6">
            <img class="img-fluid rounded-circle w-75 my-4"
            src="goku.png" alt="Mayank"/>
            </div>
            <div className="col-12 col-md-6 pt-5">
            <div className="info" style={{fontSize:"60px"}}>
            Hi, I am<span className="text-info"> Student 1</span>
            </div>
            <div style={{fontSize:"40px"}}>Welcome to my Webpage</div>
            </div>
            </div>
        </div>
    )
}
export default Title;