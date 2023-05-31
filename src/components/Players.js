import React from "react";
import usePlayers from "../hooks/usePlayers";
import queryString from "query-string";
import Sidebar from "./Sidebar";
import {
  useLocation,
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import slug from "slug";

const Player = ({ players }) => {
  const { playerId } = useParams();
  const player = players.find(({ name }) => slug(name) === playerId);
  console.log("player", player);

  return (
    <div className="panel">
      <img
        className="avatar"
        src={`${player.avatar}`}
        alt={`${player.name}'s avatar`}
      />
      <h1 className="medium-header">{player.name}</h1>
      <h3 className="header">#{player.number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>
            Team
            <div>
              <Link to={`/${player.teamId}`}>
                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
              </Link>
            </div>
          </li>
          <li>
            Position<div>{player.position}</div>
          </li>
          <li>
            PPG<div>{player.ppg}</div>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            APG<div>{player.apg}</div>
          </li>
          <li>
            SPG<div>{player.spg}</div>
          </li>
          <li>
            RPG<div>{player.rpg}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Players = () => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const team = location.search
    ? queryString.parse(location.search).teamId
    : null;
  const { response, loading } = usePlayers(team);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={response.map((player) => player.name)} />
      <Switch>
        <Route path={`${url}/:playerId`}>
          <Player players={response} />
        </Route>
        <Route path="*">
          <div className="sidebar-instructions">Select a Player</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Players;
