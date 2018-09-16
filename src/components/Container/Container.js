import React from "react";
import "./Container.css";

const Container = props => (
    <main className="container">
        <img alt={props.name} src={props.image} />
    </main>
)

export default Container;
