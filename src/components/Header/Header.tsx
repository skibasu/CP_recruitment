import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        marginBottom: 20,
        backgroundColor: "#4B4D44",
    },
});

interface IProps {
    left: JSX.Element;
    right: JSX.Element;
}
const Header: React.FC<IProps> = (props: IProps) => {
    const classes = useStyles();
    const { left, right } = props;

    return (
        <header>
            <AppBar position="static" className={classes.wrapper}>
                <Grid container>
                    <Grid item xs={6}>
                        {left}
                    </Grid>
                    <Grid item xs={6}>
                        {right}
                    </Grid>
                </Grid>
            </AppBar>
        </header>
    );
};
export default Header;
