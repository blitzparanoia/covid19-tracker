import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//fetch is using react async await, deals with promises like .then and .catch but with diff syntax
//uses try and catch blocks
//try is a success and catch is for error

//destructure the data from the response
//modData is only taking data desired from the object

export const fetchData = async (country) => {
    let changeUrl = url;

    if (country) {
        changeUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modData;

    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
    }
}