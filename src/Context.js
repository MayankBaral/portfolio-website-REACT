import axios from 'axios';
import React, { Component } from 'react'
const Mycontext= React.createContext();
export class Provider extends Component{
    Addprojecthandler=(newproject)=>{
        this.setState({
            project:[newproject, ...this.state.project]
        })
    }
    Recommendationhandler=(newrecommendation)=>{
        this.setState({
            recommendation:[newrecommendation, ...this.state.recommendation]
        })
    }
    
    state={
        addprojecthandler:this.Addprojecthandler,
        recommendationhandler: this.Recommendationhandler,
        recommendation:[
            {
                id:"1",
                cardtitle:"He is awesome",
                cardbody:"ada  aindaoi  ainaxa oainxxa",
                cardfooter:"The Student"
            },
            {
                id:"2",
                cardtitle:"He is amazing awesome 2",
                cardbody:"very good ahva adhad adiugd ah a",
                cardfooter:"The Student"
            },
            {
                id:"3",
                cardtitle:"woww dsuavx is awesome 3",
                cardbody:"ada  aindaoi  ainaxa oainxxa",
                cardfooter:"The Student"
            },
            {
                id:"4",
                cardtitle:"Good work awesome 4",
                cardbody:"ada  aindaoi  ainaxa oainxxa",
                cardfooter:"The Student"
            },
        ],
        skill: [
            {
                id:'1',
                name:'HTML',
                imageurl:'html.png',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'2',
                name:'css',
                imageurl:'CSS3.png',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'3',
                name:'js',
                imageurl:'js.jpg',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'4',
                name:'react',
                imageurl:'react.png',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'7',
                name:'ai',
                imageurl:'ai.png',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'5',
                name:'bootstrap',
                imageurl:'CSS3.png',
                starstotal:'3',
                starsactive:'2'
            },
            {
                id:'6',
                name:'python',
                imageurl:'ai.png',
                starstotal:'3',
                starsactive:'1'
            }
        ],
        project:[
            {   
                id:'1',
                title: "Watermelon",
                imageurl:"watermelon.jpg",
                tool: "Adobe Illustrator",
            },
            {
                id:'2',
                title: "The Swan",
                imageurl:"Swan2.jpg", 
                tool: "Adobe Illustrator",
            },
            {
                id:'3',
                title: "Banana",
                imageurl:"Banana.jpg",
                tool: "Adobe Illustrator",
            }],
        };

        
        async componentDidMount()
        {
            const response= await axios.get("http://127.0.0.1:9001/api/Recommendation");
            console.log(response)
           // this.setState({recommendation: response.data});
        }
        render(){
            return(
                <Mycontext.Provider value={this.state}>
                    {this.props.children}
                </Mycontext.Provider>
            )}    
}
export const Consumer=Mycontext.Consumer;