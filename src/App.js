import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Conversation from "./Conversation";
import Playground from "./Playground";
import Profile from './Profile';
import LeftContainer from "./LeftContainer";
import Dogs from "./Dogs";
import FbApp from './Firebase';
import SignIn from "./SignIn";
import CustomRoute from "./util/CustomRoute";


const App = () => {
    return <Router>
        <LeftContainer />
        <Switch>
            <Route path="/signin"><SignIn /></Route>
            <CustomRoute secured path="/conversation"><Conversation /></CustomRoute>
            <Route path="/playgroud"><Playground /></Route>
            <CustomRoute secured path="/profile"><Profile /></CustomRoute>
            <CustomRoute secured path="/dogs"><Dogs /></CustomRoute>
            <CustomRoute secured path="/firebase"><FbApp /></CustomRoute>
            {/* <Route path="/firebase"><FbApp /></Route> */}
            <CustomRoute secured path="/"><Conversation /></CustomRoute>
        </Switch>
    </Router>
}

export default App;