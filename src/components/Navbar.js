import React from "react";
import {Link} from "react-router-dom";
function Navbar()
{
    return(   
        <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-dark">
        <div className="container">
        <Link className="navbar-brand text-info ps-5" to="/">Student 1</Link>
        <button className="navbar-toggler navbar-light mt-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbaritems" aria-controls="navbaritems" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>       
        <div className="collapse navbar-collapse flex-grow-0 " id="navbaritems">
        <div className="navbar-nav d-flex-0">
        <Link to="/addproject" className="nav-link text-light px-3">Add Project</Link>
        <Link to="/contact" className="nav-link text-light px-3">Contact</Link>
        <Link to="/writerecommendation" className="nav-link text-light px-3">Recommendation</Link>
        </div>
        </div>
        </div>
        </nav>
    )
}
export default Navbar;