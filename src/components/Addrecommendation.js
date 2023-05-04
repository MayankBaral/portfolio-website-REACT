import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Consumer } from "../Context";
export default class Addrecommendation extends Component {
  state = {
    cardtitle: "",
    cardbody: "",
    cardfooter: "",
    submitmessage: "",
    submitmessagecolor: "",
  };
  onChange2 = (event) => {
    this.setState({
      [event.target.title]: event.target.value,
    });
  };
  onsubmit = async (recommendationhandler, event) => {
    // CREATING new object with required fields to post the data collected by client to the database
    const newrecommendation = {
      id: uuid(),
      cardtitle: this.state.cardtitle,
      cardbody: this.state.cardbody,
      cardfooter: this.state.cardfooter,
    };
    const response = await axios.post(
      "http://127.0.0.1:9001/api/addrecommendation",
      newrecommendation
    ); // posting the data to api
    const issuccessful = response.data.issuccessful; // if the data is posted to api then the webpage will show the "posted successfully" message
    if (issuccessful) {
      this.setState({
        submitmessage: "The project is added!",
        submitmessagecolor: "text-dark",
      });
    } else {
      this.setState({
        submitmessage: "Project is not submitted",
        submitmessagecolor: "text-danger",
      });
    }

    recommendationhandler(newrecommendation); //using the handler to pass the object
  };
  render() {
    return (
      <Consumer>
        {value=>{const { submitmessage, submitmessagecolor } = this.state;
        const{recommendationhandler}=value
        return(
            <div className="container-fluid py-5">
          <h1 className="text-center py-5">
            Write a <span className="text-info"> Recommendation</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <form onSubmit={this.onsubmit.bind(this,recommendationhandler)}>
                <div className="form-group">
                  <label htmlFor="Company" style={{ fontWeight: "lighter" }}>
                    Name of the Organistaion
                  </label>
                  <br />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Write Company name"
                    onChange={this.onChange2}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title" style={{ fontWeight: "lighter" }}>
                    Title
                  </label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Write title"
                    onChange={this.onChange2}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body" style={{ fontWeight: "lighter" }}>
                    Recommendation
                  </label>
                  <br />
                  <textarea
                    type="text"
                    id="body"
                    name="body"
                    rows="5"
                    placeholder="Write about me"
                    onChange={this.onChange2}
                  />
                </div>
                <div className="d-grid gap-2 mx-auto text-center">
                  <button type="submit" className="text-light">
                    Submit
                  </button>
                  <h2 className={submitmessagecolor}>{submitmessage}</h2>
                </div>
              </form>
            </div>
          </div>
        </div>
        )}}
      </Consumer>
    );
  }
}
