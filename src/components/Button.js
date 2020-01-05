import React from "react";
import BootStrapButton from "react-bootstrap/Button";
const Button = props => {
  return (
    <BootStrapButton
      uppercase={false}
      variant="info"
      onClick={props.handleClick}
      data-leagueid={props.leagueId}
    >
      {props.text}
    </BootStrapButton>
  );
};

export default Button;
