import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";


export const HomeTemplate = (props) => {
    const { Component, ...restParams } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return <Route {...restParams} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </Fragment>
    }} />
}