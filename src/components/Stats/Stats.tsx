import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

interface IProps {
    result: number;
    name: string;
}

const Stats: React.FC<IProps> = (props) => {
    const classes = useStyles();
    const { result, name } = props;

    return (
        <div className={classes.wrapper}>
            <h2 data-testid="title">{name}</h2>
            <ul className="stats">
                <li data-testid="result">Wins : {result}</li>
            </ul>
        </div>
    );
};

export default Stats;
