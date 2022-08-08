import axios from "axios";
import { Forecast } from "../types";

export function fetchAllPeriods() {
    return axios
        .get<Forecast>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data.properties.periods)
};