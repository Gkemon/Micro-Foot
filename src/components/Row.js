import React from "react";
import BootStrapButton from "react-bootstrap/Button";
import Details from "./Details";

const Row = props => {
  return (
    <tr>
      <td className="team-position">{props.position}</td>
      <td className="team-name">
        <div className="crest">
          <img src={props.crestURI} alt="" />
        </div>
        <BootStrapButton onClick={() =>
          window.location = '/details/' + props.teamID
          }>
          {props.teamName}
        </BootStrapButton>
      </td>
      <td>{props.playedGames}</td>
      <td>{props.wins}</td>
      <td>{props.draws}</td>
      <td>{props.losses}</td>
      <td>{props.goalsFor}</td>
      <td>{props.goalsAgainst}</td>
      <td>{props.goalDifference}</td>
      <td className="team-points">{props.points}</td>
    </tr>
  );
};

export default Row;
