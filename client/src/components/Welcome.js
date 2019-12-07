import React from "react";

const Welcome = () => {
  return (
    <div className="jumbotron">
      <p className="display-4">Welcome to the SpaceX Launcher.</p>
      <hr className="my-4" />
      <b className="text-info text-center">
        To get started click one of the buttons above.
      </b>
      <p className="lead">
        This app was built using NodeJS, ExpressJS, ReactJS, Apollo, GraphQL,
        and the official SpaceX API.
      </p>
      <blockquote class="blockquote text-right">
        <p class="mb-0">
          Inspired by the universe, built for the love of code.
        </p>
        <footer class="blockquote-footer">
          <cite title="Source Title">Dzenis H.</cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default Welcome;
