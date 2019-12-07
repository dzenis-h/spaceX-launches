import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import Spinner from "../helper/Spinner/Spinner";
import Loading from "../helper/Loading/Loading";

const ROCKET_QUERY = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      description
      wikipedia
      active
      cost_per_launch
      success_rate_pct
    }
  }
`;

export class Rocket extends Component {
  render() {
    let { rocket_id } = this.props.match.params;
    return (
      <Fragment>
        <Query query={ROCKET_QUERY} variables={{ rocket_id }}>
          {({ loading, error, data }) => {
            console.log(data);
            if (loading) return <Loading />;
            if (error) console.log(error);

            const {
              rocket_name,
              description,
              wikipedia,
              active,
              success_rate_pct,
              cost_per_launch
            } = data.rocket;

            return (
              <div>
                <h1 className="display-4 my-3">
                  <span className="text-dark">Rocket Name:</span> {rocket_name}
                </h1>
                <h4 className="mb-3">Rocket Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Description: {description}
                  </li>
                  <li className="list-group-item">
                    Cost per launch:{" "}
                    <span className="text-info">{cost_per_launch}$</span>
                  </li>
                  <li className="list-group-item">
                    Success rate:
                    <span
                      className={classNames({
                        "text-success": success_rate_pct > 50,
                        "text-danger": success_rate_pct < 50
                      })}
                    >
                      {" "}
                      {/* {active ? "Yes" : "No"} */}
                      {success_rate_pct}%
                    </span>
                  </li>
                  <li className="list-group-item">
                    Still active:{" "}
                    <span
                      className={classNames({
                        "text-success": active,
                        "text-danger": !active
                      })}
                    >
                      {active ? "Yes" : "No"}
                    </span>
                  </li>
                  <li className="list-group-item">
                    More info:
                    <a
                      href={wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {wikipedia}
                    </a>{" "}
                  </li>
                </ul>
                <hr />
                <Link to="/rockets" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Rocket;
