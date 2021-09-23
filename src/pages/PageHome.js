import React from "react";
import "./PageHome.css";
import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";
import imgUrl from "../images/icon.png";
import { Container } from "@material-ui/core";


const PageHome = () => {
    const title = "Freaks | Home";
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />

                <meta property="og:title" content="Freaks" />
                <meta
                    property="og:description"
                    content="Buscador de películas de terror"
                />
                <meta
                    property="og:image"
                    content={`https://freaks.vercel.app/${imgUrl}`}
                />
                <meta property="og:url" content="https://freaks.vercel.app/" />

                <meta property="twitter:title" content="Freaks" />
                <meta
                    property="twitter:description"
                    content="Buscador de películas de terror"
                />
                <meta
                    property="twitter:image"
                    content={`https://freaks.vercel.app/${imgUrl}`}
                />
                <meta
                    property="twitter:url"
                    content="https://freaks.vercel.app/"
                />
            </Helmet>
            <Container className="home-container">
                <SearchBar />
            </Container>
        </>
    );
};

export default PageHome;
