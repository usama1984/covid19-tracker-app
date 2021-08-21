import React, { Component } from "react";
import styles from "./app.module.css";

import { Cards, Chart, CountryPicker } from "./components"; //because of index in component we can import them like this ohter wise we have to import them seperatly
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
export default class App extends Component {
    state = {
        data: {},
        country: "",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={coronaImage}
                    alt="COVID-19"
                />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
