import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import { MyContext } from "../../ContextStore/ContextStore";
import checkResult from "../../utils/checkResult";
import removeUnderscores from "../../utils/removeUnderscores";
import { getRandomData } from "../../api/getRandomData";
import { EResult } from "../../app.models";
import { config } from "../../settings/settings";

const useStyles = makeStyles({
    wrapper: {
        marginTop: 40,
    },
    btnGroup: {
        backgroundColor: "#4B4D44",
        padding: "20px 10px",
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > *": {
            marginLeft: 50,
            marginright: 50,
        },
    },
    btnFirst: {
        backgroundColor: "#566411",
        "&:hover": {
            backgroundColor: "#000",
        },
        borderColor: "transparent !important",
        boxShadow: "2px 1px 1px rgba(0,0,0, .5)",
    },
    btnSecond: {
        backgroundColor: "#501B52",
        "&:hover": {
            backgroundColor: "#000",
        },
        borderColor: "transparent !important",
        boxShadow: "2px 1px 1px rgba(0,0,0, .5)",
    },
});
const ButtonsGroup = () => {
    const classes = useStyles();
    const {
        results,
        isLoading,
        setLoading,
        setError,
        setState,
        primaryToggle,
        setResults,
        setWinner,
    } = useContext(MyContext);
    const { urls, groups, minMax } = config;
    const onHandler = async (
        isPrimary: boolean,
        keysForCompare: string,
        i: number
    ) => {
        setLoading(true);
        const data = await getRandomData(urls[i], minMax[i]);

        if (typeof data === "string") {
            setError(data);
            setLoading(false);
        } else {
            const result = checkResult([
                data[0][keysForCompare],
                data[1][keysForCompare],
            ]);

            setLoading(false);
            setError("");
            setState(data);
            primaryToggle(isPrimary);

            if (result === EResult.P1WIN) {
                setResults({
                    ...results,
                    playerOne: results.playerOne + 1,
                });
                setWinner(
                    `<span>Player One has won!</span><span>${
                        data[0].name
                    }  has greater ${removeUnderscores(keysForCompare)} than ${
                        data[1].name
                    }.</span>`
                );
            } else if (result === EResult.P2WIN) {
                setResults({
                    ...results,
                    playerTwo: results.playerTwo + 1,
                });
                setWinner(
                    `<span>Player Two has won!</span><span>${
                        data[1].name
                    }  has greater ${removeUnderscores(keysForCompare)} than ${
                        data[0].name
                    }.</span>`
                );
            } else if (result === EResult.DRAW) {
                setWinner(
                    `<span style="display:'block'">DROW!</span><span style="display:'block'">${
                        data[0].name
                    }  has the same ${removeUnderscores(keysForCompare)} as ${
                        data[1].name
                    }.</span>`
                );
                return;
            }
        }
    };
    return (
        <ButtonGroup
            data-testid="buttons"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
            className={classes.btnGroup}
        >
            {groups.map((v, i) => {
                let className =
                    i % 2 === 0 ? classes.btnFirst : classes.btnSecond;
                let isPrimary = i % 2 === 0 ? true : false;
                let keysForCompare = config.keys[i];

                return (
                    <Button
                        key={i}
                        className={className}
                        onClick={() => onHandler(isPrimary, keysForCompare, i)}
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                    >
                        {`Compare Two ${v}`}
                    </Button>
                );
            })}
        </ButtonGroup>
    );
};

export default ButtonsGroup;
