import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default DefaultLayout;
