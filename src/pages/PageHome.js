import React from "react";
import "./PageHome.css";
import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";

const PageHome = () => {
    const title = "Freaks | Home";
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <section className="home-container">
                <SearchBar />
            </section>
        </>
    );
};

export default PageHome;
