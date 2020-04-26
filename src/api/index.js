import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//fetch is using react async await, deals with promises like .then and .catch but with diff syntax
//uses try and catch blocks
//try is a success and catch is for error

export const fetchData = async () => {
    try {
        const resp = await axios.get(url);
        
        return resp;
    } catch (error) {

    }
}