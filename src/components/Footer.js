import React from "react";
function Footer(){
    return(
        <>
        <footer className="relative-bottom">
            <div className="container-fluid text-center pb-4" style={{backgroundColor:"black"}}>
            <div className="row pb-5">
            <div className="col-12 px-0">
            <h2 className="text-light pt-3" style={{fontSize:"20px" ,height:"60px", background:"darkslategray"}}>For more information contact me.</h2>
            </div>
            <div className="row text-align-center pt-5">
            <div className="col-md-4 col-12">
            <h5 className="text-info">More links</h5>
            <a href="/" className="text-light" target="newtab">G-mail</a><br/>
            <a href="/" className="text-light" target="newtab">Instagram</a>                
            </div>
            <div className="col-md-4 col-12 pt-3">
            <p className="text-light">Thankyou for visiting my portfolio.</p>
            </div>
            <div className="col-12 col-md-4">
            <h5 className="text-info">Social Media</h5>
            </div>
            </div>   
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;