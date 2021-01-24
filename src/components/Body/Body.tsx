import React from "react";
import { Grid } from "@material-ui/core";
import ErrorBox from "../ErrorBox/ErrorBox";
import { makeStyles } from "@material-ui/core/styles";
import { IPost } from "../../app.models";

const useStyles = makeStyles({
    wrapper: {
        minHeight: 430,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        maxWidth: "100%",
        flex: "0 0 100%",
        textAlign: "center",

        margin: "0 auto",
        color: "#000",
        paddingTop: 5,
        padingBottom: 5,
        fontWeight: 600,
    },
    gridContainer: {
        height: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
});

interface IProps {
    message: string[];
    dataToCompare: IPost;
    error: string | undefined;
    welcomeMessage: string;
    left: JSX.Element;
    right: JSX.Element;
}
const Body: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const {
        message,
        dataToCompare,
        error,
        welcomeMessage,
        left,
        right,
    } = props;
    return (
        <div className={classes.wrapper}>
            {message.length === 0 && !error && <h2>{welcomeMessage}</h2>}
            {message.length > 0 &&
                message.map((v: string, i: number) => {
                    return (
                        <p key={i} className={classes.text}>
                            {v}
                        </p>
                    );
                })}
            {!error && dataToCompare.length > 0 && (
                <Grid container spacing={4} className={classes.gridContainer}>
                    <Grid item xs={6}>
                        {left}
                    </Grid>
                    <Grid item xs={6}>
                        {right}
                    </Grid>
                </Grid>
            )}
            {error && <ErrorBox value={error} />}
        </div>
    );
};

export default Body;
