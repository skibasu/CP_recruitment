import { EResult } from "../app.models";

const checkResult = (data: [string, string]) => {
    const a = !isNaN(+data[0].replace(",", "."))
        ? +data[0].replace(",", ".")
        : 0;
    const b = !isNaN(+data[1].replace(",", "."))
        ? +data[1].replace(",", ".")
        : 0;

    if (a > b) {
        return EResult.P1WIN;
    } else if (a < b) {
        return EResult.P2WIN;
    } else {
        return EResult.DRAW;
    }
};
export default checkResult;
