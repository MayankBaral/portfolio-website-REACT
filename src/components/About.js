import React from "react";
function About(){
    return(
        <>
        <div className="container-fluid text-center py-3 px-0 text-light bg-dark">
            <h1>
            About<span className="text-info"> Me</span> </h1>
        </div>
        <div className="container text-center my-0 pb-5">
            <div className="row mt-2 pt-3">
            <div className="col-12 col-md-4 my-3">
            <div className="card h-auto border-0 p-3">
                <h2>Lorem Ipsum</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            </div>
            <div className="col-12 col-md-4 my-3">
            <div className="card h-auto border-0 p-3">
                <h2>Lorem Ipsum 2</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
            </div>
            </div>
            <div className="col-12 col-md-4 my-3">
                <div className="card h-auto border-0 p-3">
                <h2>Lorem Ipsum 3</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                </div>
                </div>
                </div>  
            </div>
        </>
    )
}
export default About;