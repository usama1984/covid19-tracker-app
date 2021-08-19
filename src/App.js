import React, { Component } from "react";
import styles from "./app.module.css";

import { Cards, Chart, CountryPicker } from "./components"; //because of index in component we can import them like this ohter wise we have to import them seperatly

export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        );
    }
}
