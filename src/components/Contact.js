import React, { Component }  from "react";
class Contact extends Component{
    //There are 2 ways of adding state - 1. Through Constructor
    /* The stateful components are keeping track of changing data, while stateless components print out what is given to them via props, 
    or they always render the same thing.*/
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            review:'',
            submitmessage:'',
            submitmessagecolor:''
        };
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,  //this sets the data and shows in component the name targets the varables and value targets the value entered in the field
        });
    };
    onSubmit = (event) =>{
        event.preventDefault();
        let success=true;
        const name = this.state;
        if(success){
            this.setState({
                submitmessage:'Thankyou',
                submitmessagecolor:'text-info'
            })
        }
        else{   
                this.setState({
                submitmessage:'Will get back at you',
                submitmessagecolor:'text-danger'
            })}}
    render(){
        const{submitmessage,submitmessagecolor}=this.state; //Destructs the elements to call
        return(
            <>
            <br /><br /><br />
            <div className="container-fluid pt-5 my-5">
                <h1 className="text-center">Contact<span className="text-info"> Me</span></h1>
                <div className="row justify-content-center">
                <div className="col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label><br/>
                    <input type="text" name="name" id="1" placeholder="Enter your name" onChange={this.onChange}/><br/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label><br/>
                    <input type="email" name="email" id="2" placeholder="Enter your email" onChange={this.onChange}/><br/>   
                    </div>
                    <div className="form-group">
                    <label htmlFor="review" className="form-label">Review</label><br/>
                    <textarea name="review" id="3" placeholder="Enter your views" rows="5" onChange={this.onChange}></textarea><br/>   
                    </div>
                    <div className='d-grid gap-2 mx-auto text-center'>
                        <button type="submit" className='text-light'>Submit</button>
                        <h2 className={submitmessagecolor}>{submitmessage}</h2>
                    </div>
                </form>
                </div>
                </div>
                </div>
            </>
        )}}
export default Contact;