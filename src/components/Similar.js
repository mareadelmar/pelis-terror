import React from "react";
import "./Similar.css";
import Card from "./Card";
import TitlePage from "./TitlePage";
import { Container } from "@material-ui/core";

const Similar = ({ similar }) => {
    return (
        <Container className="similar-container">
            <TitlePage title="Películas similares" />
            <div className="flex similar-movies">
                {similar.map((item) => {
                    return <Card key={item.id} dataObject={item} />;
                })}
            </div>
        </Container>
    );
};

export default Similar;
