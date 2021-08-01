import React, { useState } from "react";
import { createContext } from "react";
import type { ICntx, IResults, IPost } from "../app.models";

interface IChildren {
    children?: JSX.Element | JSX.Element[];
}
const context: ICntx = {
    state: [],
    setState: (state) => state,

    isPrimary: true,
    primaryToggle: (isPrimary) => isPrimary,

    error: "",
    setError: (error: string) => error,

    results: { playerOne: 0, playerTwo: 0 },
    setResults: (results: IResults) => results,

    winner: "",
    setWinner: (name: string) => name,

    isLoading: false,
    setLoading: (loading: boolean) => loading,
};
export const MyContext = createContext(context);

const ContextStore: React.FC<IChildren> = ({ children }) => {
    const [state, setState] = useState<IPost[]>([] as IPost[]);
    const [isPrimary, primaryToggle] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [winner, setWinner] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<IResults>({
        playerOne: 0,
        playerTwo: 0,
    });
    return (
        <MyContext.Provider
            value={{
                state,
                setState,
                isPrimary,
                primaryToggle,
                error,
                setError,
                results,
                setResults,
                winner,
                setWinner,
                isLoading,
                setLoading,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};
export default ContextStore;
