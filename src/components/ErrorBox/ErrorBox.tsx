import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../../ContextStore/ContextStore";

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        padding: 25,
    },
    body: {
        flexGrow: 1,
        maxWidth: "100%",
        color: "#D96060",
    },
});

const ErrorBox: React.FC = () => {
    const classes = useStyles();
    const { error } = useContext(MyContext);

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <h2>Something went wrong :</h2>
                <p>{error}</p>
                <h2>Just try again</h2>
            </div>
        </div>
    );
};

export default ErrorBox;
