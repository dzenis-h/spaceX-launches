import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from "./components/Launches/Launches";
import Launch from "./components/Launches/Launch";
import Rockets from "./components/Rockets/Rockets";
import Rocket from "./components/Rockets/Rocket";
import Main from "./components/helper/Main";
import Welcome from "./components/Welcome";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Main />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/launches" component={Launches} />
              <Route exact path="/rockets" component={Rockets} />
              <Route exact path="/rocket/:rocket_id" component={Rocket} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
