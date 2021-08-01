export interface IPost {
    [key: string]: any;
}

export interface IResults {
    playerOne: number;
    playerTwo: number;
}

export interface ICntx {
    state: IPost[];
    setState: (state: IPost[]) => void;

    isPrimary: boolean;
    primaryToggle: (isPrimary: boolean) => void;

    error: string;
    setError: (error: string) => void;

    results: IResults;
    setResults: (results: IResults) => void;

    winner: string;
    setWinner: (name: string) => void;

    isLoading: boolean;
    setLoading: (loading: boolean) => void;
}
export enum EResult {
    P1WIN = "P1WIN",
    P2WIN = "P2WIN",
    DRAW = "DRAW",
}
