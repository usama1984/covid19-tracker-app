import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchApi();
    }, [setFetchedCountries]);

    return (
        <div>
            <FormControl>
                <NativeSelect
                    defaultValue=""
                    onChange={(e) => handleCountryChange(e.target.value)}
                >
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => (
                        <option key={i} value={country}>
                            {country}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;
