import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./data.json";
import Projects from "./components/Projects";
import ProjectInfo from "./components/ProjectInfo";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Soon from "./components/Soon";
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <h1 className="jumbotron">Portfolio Sven Wacker</h1>
        <Switch>
          {
            // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          }
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route
            path="/project"
            exact
            component={() => <Projects data={Data} />}
          />
          {
            // more about match
            // https://reactrouter.com/web/api/match
          }
          <Route
            path="/project/:id"
            component={({ match }) => {
              console.log(match);
              return <ProjectInfo data={Data} id={match.params.id} />;
            }}
          />
          {
            //  <Route  path="/products"
            // exact >
            // <Products data={Data} />
            // </Route>
          }
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
