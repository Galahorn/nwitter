import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
    const [isLoggedin, setLoggedin] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedin ? (
                    <Route exact path = "/">
                        <Home />      
                    </Route>
                ) : (
                    <Route exact path = "/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;