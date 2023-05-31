import React from "react";
import Sidebar from "./Sidebar";
import TeamLogo from "./TeamLogo";
import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeam from "../hooks/useTeam";

const Team = () => {
  const { teamId } = useParams();
  const { response: team, loading } = useTeam(teamId);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo id={team.id} className="center" />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            Est.<div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
        </ul>
        <Link className="center btn-main" to={`/${teamId}`}>
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
};

const Teams = () => {
  const { url } = useRouteMatch();
  const { response, loading } = useTeamNames();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={response} />
      <Switch>
        <Route path={`${url}/:teamId`}>
          <Team />
        </Route>
        <Route path="*">
          <div className="sidebar-instructions">Select a Team</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Teams;
