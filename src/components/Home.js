import React from "react";
import useTeamNames from "../hooks/useTeamNames";
import { Link } from "react-router-dom";
import TeamLogo from "./TeamLogo";

const Home = () => {
  const { response, loading } = useTeamNames();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {response.map((team) => (
          <Link to={`${team}`}>
            <TeamLogo id={team} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
