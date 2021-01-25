import { IPost, IResult } from "../app.models";

const checkResult = (arrKeys: string[], arrObj: IPost) => {
    let result: IResult = {
        result: "",
        winner: "",
        loser: "",
        key: "",
    };
    arrKeys.forEach((v) => {
        if (v in arrObj[0]) {
            const a = !isNaN(+arrObj[0][v].replace(",", "."))
                ? +arrObj[0][v].replace(",", ".")
                : 0;
            const b = !isNaN(+arrObj[1][v].replace(",", "."))
                ? +arrObj[1][v].replace(",", ".")
                : 0;

            if (a > b) {
                result = {
                    result: "P1WIN",
                    winner: arrObj[0].name,
                    loser: arrObj[1].name,
                    key: v,
                };
            } else if (a < b) {
                result = {
                    result: "P2WIN",
                    winner: arrObj[1].name,
                    loser: arrObj[0].name,
                    key: v,
                };
            } else {
                result = {
                    result: "DRAW",
                    winner: arrObj[0].name,
                    loser: arrObj[1].name,
                    key: v,
                };
            }
        }
    });
    return result;
};
export default checkResult;
