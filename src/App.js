import React, { Component } from "react";
import styles from "./app.module.css";

import { Cards, Chart, CountryPicker } from "./components"; //because of index in component we can import them like this ohter wise we have to import them seperatly
import { fetchData } from "./api";
export default class App extends Component {
    state = {
        data: {},
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}
