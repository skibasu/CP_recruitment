import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

interface IProps {
    value: string;
}
const ErrorBox: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { value } = props;
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <h2>Something went wrong :</h2>
                <p>{value}</p>
                <h2>Just try again</h2>
            </div>
        </div>
    );
};

export default ErrorBox;
