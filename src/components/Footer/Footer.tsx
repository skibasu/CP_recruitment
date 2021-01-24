import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

interface IProps {
    setData: (elem: string, arr: number[]) => void;
}

const Footer: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { setData } = props;
    const { urls, groups, minMax } = config;

    return (
        <footer className={classes.wrapper}>
            <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
                className={classes.btnGroup}
            >
                {groups.map((v, i) => {
                    let className =
                        i % 2 === 0 ? classes.btnFirst : classes.btnSecond;
                    return (
                        <Button
                            key={i}
                            className={className}
                            onClick={() => setData(urls[i], minMax[i])}
                            variant="contained"
                            color="primary"
                        >
                            {`Compare Two ${groups[i]}`}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </footer>
    );
};
export default Footer;
