export interface IPost {
    [key: string]: any;
}

export interface IState {
    playerOne: number;
    playerTwo: number;
}

export interface IResult {
    result: string;
    winner?: string;
    loser?: string;
    key: string;
}
