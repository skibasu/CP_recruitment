import axios from "axios";
import setTwoRandomIds from "../utils/setTwoRandomIds";

export const getRandomData = (url: string, minMax: number[]) => {
    const ids = setTwoRandomIds(minMax);
    const getElemOne = axios.get(url + ids[0]);
    const getElemTwo = axios.get(url + ids[1]);

    axios
        .all([getElemOne, getElemTwo])
        .then(
            axios.spread((...response) => [response[0].data, response[1].data])
        )
        .catch((error) => error.message);
};
