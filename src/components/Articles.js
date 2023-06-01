import React from "react";
import Sidebar from "./Sidebar";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import useArticle from "../hooks/useArticle";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading) {
    return null;
  }

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
};

const Articles = () => {
  const { teamId } = useParams();
  const { response, loading } = useTeamsArticles(teamId);
  const { path } = useRouteMatch();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={response.map((article) => article.title)}
      />
      <Switch>
        <Route path={`${path}/:articleId`}>
          <Article />
        </Route>
        <Route path="*">
          <div className="sidebar-instructions">Select an Article</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Articles;
