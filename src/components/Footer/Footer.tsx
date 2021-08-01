import React from "react";
import ButtonGroup from "../ButtonsGroup/ButtonsGroup";
import { makeStyles } from "@material-ui/core/styles";

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

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.wrapper}>
            <ButtonGroup />
        </footer>
    );
};
export default Footer;
