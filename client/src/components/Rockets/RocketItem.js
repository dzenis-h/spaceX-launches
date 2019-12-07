import React from "react";
// import classNames from "classnames";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default function RocketItem({
  rocket: { rocket_id, rocket_name, first_flight, active }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Rocket name: <span className="text-warning">{rocket_name}</span>{" "}
          </h4>
          <p>
            First flight:{" "}
            <Moment format="YYYY-MM-DD" className="text-primary">
              {first_flight}
            </Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/rocket/${rocket_id}`} className="btn btn-secondary">
            Rocket Details
          </Link>
        </div>
      </div>
    </div>
  );
}
