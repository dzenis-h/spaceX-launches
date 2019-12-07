import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RocketItem from "./RocketItem";

import Loading from "../helper/Loading/Loading";

const ROCKETS_QUERY = gql`
  query RocketsQuery {
    rockets {
      rocket_id
      rocket_name
      description
      wikipedia
      active
      first_flight
    }
  }
`;

export class Rockets extends Component {
  render() {
    return (
      <Fragment>
        <Query query={ROCKETS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) console.log(error);

            return (
              <Fragment>
                {data.rockets.map(rocket => (
                  <RocketItem key={rocket.rocket_id} rocket={rocket} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Rockets;
