import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import CustomCard from "./components/CustomCard/CustomCard";
import setTwoRandomIds from "./utils/setTwoRandomIds";
import removeUnderscores from "./utils/removeUnderscores";
import checkResult from "./utils/checkResult";
import { config } from "./settings/settings";
import { IPost, IState } from "./app.models";

const App: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [welcomeMessage, setWelcomeMessage] = useState<string>("");
    const [message, setMessage] = useState<string[]>([]);
    const [state, setState] = useState<IState>({ playerOne: 0, playerTwo: 0 });
    const [isLoading, setLoading] = useState<boolean>(false);
    const [dataToCompare, setCompareObjects] = useState<IPost[]>([]);

    const setData = (url: string, minMax: number[]) => {
        const { keys } = config;
        const ids = setTwoRandomIds(minMax);
        const getElemOne = axios.get(url + ids[0]);
        const getElemTwo = axios.get(url + ids[1]);
        setLoading(true);
        axios
            .all([getElemOne, getElemTwo])
            .then(
                axios.spread((...response) => {
                    const elemOne = response[0].data;
                    const elemTwo = response[1].data;

                    setCompareObjects([elemOne, elemTwo]);
                    const { result, winner, loser, key } = checkResult(keys, [
                        elemOne,
                        elemTwo,
                    ]);
                    const type =
                        keys.indexOf(key) % 2 === 0 ? "primary" : "secondary";

                    setError("");
                    setType(type);
                    setLoading(false);

                    if (result === "P1WIN") {
                        setState((state) => ({
                            ...state,
                            playerOne: state.playerOne + 1,
                        }));
                        setMessage([
                            "Player One has Won!",
                            `${winner} has greater ${removeUnderscores(
                                key
                            )} than ${loser}`,
                        ]);
                    } else if (result === "P2WIN") {
                        setState((state) => ({
                            ...state,
                            playerTwo: state.playerTwo + 1,
                        }));
                        setMessage([
                            "Player Two has Won!",
                            `${winner} has greater ${removeUnderscores(
                                key
                            )} than ${loser}`,
                        ]);
                    } else if (result === "DRAW") {
                        setMessage([
                            "DRAW !",
                            `${winner} has the same ${removeUnderscores(
                                key
                            )} as ${loser}`,
                        ]);
                    }
                })
            )
            .catch((error) => {
                setError(error.message);
                setMessage([]);
                setLoading(false);
            });
    };
    useEffect(() => {
        setWelcomeMessage(
            "Play by pressing one of the button below in the footer!"
        );
    }, []);

    return (
        <div className="App">
            <Header
                left={<Stats name="Player One" result={state.playerOne} />}
                right={<Stats name="Player Two" result={state.playerTwo} />}
            />
            <Body
                dataToCompare={dataToCompare}
                message={message}
                error={error}
                welcomeMessage={welcomeMessage}
                isLoading={isLoading}
                left={<CustomCard values={dataToCompare[0]} type={type} />}
                right={<CustomCard values={dataToCompare[1]} type={type} />}
            />
            <Footer setData={setData} isLoading={isLoading} />
        </div>
    );
};

export default App;
