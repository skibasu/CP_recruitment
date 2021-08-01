import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { IPost } from "../../app.models";
import { config } from "../../settings/settings";
import removeUnderscores from "../../utils/removeUnderscores";
import { MyContext } from "../../ContextStore/ContextStore";

const useStyles = makeStyles({
    primary: {
        backgroundColor: "#F1F5DC",
        padding: 20,
        minHeight: 400,
    },
    secondary: {
        backgroundColor: "#D19BD3",
        padding: 20,
        minHeight: 400,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    subTitle: {
        fontSize: 14,
    },
    list: {
        padding: 0,
        margin: 0,
    },
    listElem: {
        padding: 0,
        listStyle: "none",
        marginBottom: 12,
    },
    firstElem: {},
    avatar: {
        backgroundColor: "#000",
        color: "#fff",
        marginBottom: 20,
    },
});

const CustomCard: React.FC<IPost> = ({ values }) => {
    const classes = useStyles();
    const { isPrimary } = useContext(MyContext);
    const { propertiesToShow } = config;

    return (
        <Card className={isPrimary ? classes.primary : classes.secondary}>
            <CardContent>
                <ul className={classes.list}>
                    {Object.keys(values)
                        .slice(0, propertiesToShow)
                        .map((v, i) => (
                            <li key={i} className={classes.listElem}>
                                {i === 0 && (
                                    <Avatar
                                        aria-label="recipe"
                                        className={classes.avatar}
                                    >
                                        {values[v][0]}
                                    </Avatar>
                                )}
                                <span className={classes.subTitle}>
                                    {removeUnderscores(v)} :
                                </span>
                                <span className={classes.title}>
                                    {values[v]}
                                </span>
                            </li>
                        ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
