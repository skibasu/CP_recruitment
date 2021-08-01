import axios from "axios";
import setTwoRandomIds from "../utils/setTwoRandomIds";

export const getRandomData = async (url: string, minMax: number[]) => {
    const ids = setTwoRandomIds(minMax);

    const result = await axios
        .all([axios.get(url + ids[0]), axios.get(url + ids[1])])
        .then(
            axios.spread((...response) => [response[0].data, response[1].data])
        )
        .catch((error) => error.message);
    return result;
};
