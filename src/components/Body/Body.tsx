import React, { useContext } from "react";
import { MyContext } from "../../ContextStore/ContextStore";
import { Grid } from "@material-ui/core";
import CustomCard from "../CustomCard/CustomCard";
import ErrorBox from "../ErrorBox/ErrorBox";
import Loader from "../Loader/Loader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    wrapper: {
        minHeight: 1033,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        "@media all and (min-width:992px)": {
            minHeight: 561,
        },
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

const Body: React.FC = () => {
    const classes = useStyles();
    const { state, error, isLoading, winner } = useContext(MyContext);

    return (
        <div className={classes.wrapper}>
            {state.length === 0 && !error && !isLoading && (
                <h2 data-testid="heading">
                    Play by pressing one of the button below in the footer!
                </h2>
            )}
            {state.length > 0 && !error && !isLoading && (
                <>
                    <p
                        className={classes.text}
                        dangerouslySetInnerHTML={{
                            __html: winner,
                        }}
                    />
                    <Grid
                        container
                        spacing={4}
                        className={classes.gridContainer}
                    >
                        <Grid item xs={12} lg={6}>
                            <CustomCard values={state[0]} />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <CustomCard values={state[1]} />
                        </Grid>
                    </Grid>
                </>
            )}
            {error && !isLoading && <ErrorBox />}
            {isLoading && <Loader />}
        </div>
    );
};

export default Body;
