import React from "react";
import { Consumer } from "../Context";
import RecommendationCard from "./RecommendationCard";
import {v4 as uuid} from 'uuid';
export default function Recommendation() {
  return (
    <Consumer>
      {(value) => {
        const { recommendation } = value;
        return (
          <div className="container-fluid py-4">
            <div className="container text-center pb-3">
              <h1 className="text-info max-width-auto">Recommendation </h1>
            </div>
            
            <div className="d-flex flex-nowrap overflow-auto scrollbar ">
              {recommendation.map((recommendationcard) => (
                <div key={uuid()} className="col-12 col-md-4 p-3">
                  <RecommendationCard recommendationcard={recommendationcard} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
