import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <>

            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/dashboard" >
                        <Dashboard />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>

        </>
    );
}

export default Routes;
