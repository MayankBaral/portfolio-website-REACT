import React from "react";
import { Component, useRef } from "react";

/*export default function RecommendationCard(props) {
    const {cardtitle,cardbody,cardfooter}=props.recommendationcard
    return (
    <div className="card h-auto">
        <div className="card-title text-center pt-3 pb-1 m-0" style={{fontWeight:"bold", fontSize:"20px"}}>{cardtitle}</div>
        <div className="card-body text-center" style={{padding:"15px"}}>{cardbody}</div>
        <div className="card-body text-end p-0 mx-4 mb-2">{cardfooter}</div>
    </div>
  )
}*/
export default class RecommendationCard extends Component {
  constructor(props) {
    super(props);
    this.refmodal = React.createRef(null);
  }
  render() {
    const { id,cardtitle, cardbody, cardfooter } = this.props.recommendationcard;
    const onclick = () => {
      this.refmodal.current.click(id);
    };

    const mslice = cardtitle.slice(0, 10) + "...";
    console.log(mslice);

    return (
      <>
        <button
          type="button"
          ref={this.refmodal}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {cardtitle}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {cardbody}
                <div className="text-end pt-1 mx-4 mb-1">{cardfooter}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <a onClick={onclick}>
          <div className="card h-auto">
            <div
              className="card-title text-center pt-3 pb-1 m-0"
              on
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              {cardtitle.slice(0, 14) + "..."}
            </div>
            <div className="card-body text-center" style={{ padding: "15px" }}>
              {cardbody}
            </div>
            <div className="card-body text-end p-0 mx-4 mb-2">{cardfooter}</div>
          </div>
        </a>
      </>
    );
  }
}
