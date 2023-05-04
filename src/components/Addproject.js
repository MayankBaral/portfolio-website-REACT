/*  In this page we are rendering the input from the forms to the other side of the webpage.
    State- this is used to change the state when data is entered in the component
    onchange,onsubmit - these handlers are used to excute the state changed in the component section of the react 
*/
import React, { Component } from 'react'
import { Consumer } from '../Context';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
export default class Addproject extends Component {
    state={
        imageurl:'',
        title:'',
        excerpt:'',
        body:'',
        submitmessage:'',
        submitmessagecolor:'',
    };
    onchange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    onsubmit = async (addprojecthandler,event) =>{     
        // CREATING new object with required fields to post the data collected by client to the database  
        const newProject={
            id: uuid(),
            imageurl: this.state.imageurl,
            title: this.state.title,
            excerpt: this.state.excerpt,
            body: this.state.body
            }
        const response = await axios.post("http://127.0.0.1:9001/api/addproject",newProject); // posting the data to api
        const issuccessful= response.data.issuccessful // if the data is posted to api then the webpage will show the "posted successfully" message 
        if(issuccessful){
            this.setState({
                submitmessage:'The project is added!',
                submitmessagecolor:'text-dark'
            })}
        else{
            this.setState({
                submitmessage:'Project is not submitted',
                submitmessagecolor:'text-danger'
            })}
        
        addprojecthandler(newProject); //using the handler to pass the object 
        }
  render() {
      return(
            <Consumer>
              {value=>{
                const{imageurl,
                        title,
                        body, 
                        submitmessage, 
                        submitmessagecolor
                    }=this.state; // we have to destruct here whaterver we want to render in the page
                /*we use onchange handler to change the state in react and render */
                const{addprojecthandler}=value;
                return(
                    <div className='container-fluid pt-5 my-5'>
                    <h1 className='text-center text-dark'>Add <span className='text-info'> Project</span></h1>
                    <div className="row py-4 px-5">
                    <div className="col-12 col-lg-6">
                    <form onSubmit={this.onsubmit.bind(this,addprojecthandler)}>
                    <div className="form-group"> 
                        <label htmlFor="imageurl" style={{fontWeight:"lighter"}}>Image</label>
                        <input type="text" name="imageurl" id="imageurl" className='form-control' placeholder='Enter the imageurl' onChange={this.onchange}/> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" style={{fontWeight:"lighter"}}>Title</label>  
                        <input type="text" name="title" id="title" className='form-control' placeholder='Enter the title' onChange={this.onchange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body" style={{fontWeight:"lighter"}}>Body</label>
                        <textarea type="text" rows="5" name="body" id="body" className='form-control' placeholder='Enter the body' onChange={this.onchange}/>
                    </div>
                    <div className='d-grid gap-2 mx-auto text-center'>
                        <button type="submit" className='text-light'>Submit</button>
                        <h2 className={submitmessagecolor}>{submitmessage}</h2>
                    </div>
                    </form>
                    </div>
                    <div className="col-12 col-lg-6">
                    <div className="justify-content-center">
                        <img src={imageurl} alt={title} />
                    </div>
                    <h1 className="text-center">{title}</h1>
                    {body}
                    </div>
                    </div>
                    </div>
                  )
              }}
            </Consumer>
      )
}}
