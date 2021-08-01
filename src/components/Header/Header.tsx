import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../../ContextStore/ContextStore";
import Stats from "../Stats/Stats";

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        marginBottom: 20,
        backgroundColor: "#4B4D44",
    },
});

const Header: React.FC = () => {
    const classes = useStyles();
    const {
        results: { playerOne, playerTwo },
    } = useContext(MyContext);

    return (
        <header>
            <AppBar position="static" className={classes.wrapper}>
                <Grid container>
                    <Grid item xs={6}>
                        <Stats name="Player One" result={playerOne} />
                    </Grid>
                    <Grid item xs={6}>
                        <Stats name="Player Two" result={playerTwo} />
                    </Grid>
                </Grid>
            </AppBar>
        </header>
    );
};
export default Header;
