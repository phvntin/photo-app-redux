import React from "react";
import PropTypes from "prop-types";
import { Button, Spinner } from "reactstrap";

Loading.propTypes = {};

function Loading(props) {
  return (
    <Button color="primary" disabled>
      <Spinner size="sm">Loading...</Spinner>
      <span> Loading</span>
    </Button>
  );
}

export default Loading;
