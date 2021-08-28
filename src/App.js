import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Conversation from "./Conversation";
import Playground from "./Playground";
import Home from "./Home";
import AppBar from "./AppBar";
import Profile from './Profile';

const App = () => {
    return <Router>
        <AppBar />
        <Switch>
            <Route path="/conversation"><Conversation /></Route>
            <Route path="/playgroud"><Playground testProp={1} /></Route>
            <Route path="/profile"><Profile /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    </Router>
}

export default App;