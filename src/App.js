import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Conversation from "./Conversation";
import Playground from "./Playground";
import Home from "./Home";
import Profile from './Profile';
import LeftContainer from "./LeftContainer";
import Dogs from "./Dogs";


const App = () => {
    return <Router>
        <LeftContainer />
        <Switch>
            <Route path="/conversation"><Conversation /></Route>
            <Route path="/playgroud"><Playground /></Route>
            <Route path="/profile"><Profile /></Route>
            <Route path="/dogs"><Dogs /></Route>
            <Route path="/"><Conversation /></Route>
        </Switch>
    </Router>
}

export default App;