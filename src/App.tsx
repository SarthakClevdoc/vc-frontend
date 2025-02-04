import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoomEntry from "./Components/RoomEntry";
import VideoRoom from "./Components/VideoRoom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RoomEntry} />
        <Route path="/room/:roomId/:username" component={VideoRoom} />
      </Switch>
    </Router>
  );
};

export default App;
