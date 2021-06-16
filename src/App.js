import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectData from "./project.json";
import Projects from "./components/Projects";
import ProjectInfo from "./components/ProjectInfo";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Soon from "./components/Soon";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <h1 className="main-heading">Portfolio Sven Wacker</h1>
        <Switch>
          {
            // <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          }
          <Route path="/" exact component={Home} />
          <Route path="/portfolio-app" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route
            path="/project"
            exact
            component={() => <Projects data={ProjectData} />}
          />
          {
            // more about match
            // https://reactrouter.com/web/api/match
          }
          <Route
            path="/project/:id"
            component={({ match }) => {
              console.log(match);
              return <ProjectInfo data={ProjectData} id={match.params.id} />;
            }}
          />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
