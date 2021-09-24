import React from "react";
import "./Header.css";
import { Link, useRoute } from "wouter";
import useUserData from "../../hooks/useUserData";
import Menu from "../Menu/Menu";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    btnCustom: {
        marginTop: "0.5em",
    },
});

const Header = () => {
    const classes = useStyle();
    const { userLogged } = useUserData();
    const [matchLogin] = useRoute("/login");
    const [matchHome] = useRoute("/");

    const titleStyleHome = matchHome ? "title-app-home" : "title-app";
    const renderNav = ({ userLogged }) => {
        return userLogged ? (
            <Menu />
        ) : (
            <Button
                className={classes.btnCustom}
                color="primary"
                variant="contained"
                href="/login"
            >
                Login
            </Button>
        );
    };
    const loginBarCondition = matchLogin ? null : renderNav({ userLogged });

    return (
        <header className="flex">
            <div className="flex log-container">{loginBarCondition}</div>
            <div className="flex title-container">
                <Link to="/">
                    <h1 className={titleStyleHome}>freaks</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
