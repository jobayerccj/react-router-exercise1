import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },

}));


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <nav>

                    <Link variant="button" color="textPrimary" to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link variant="button" color="textPrimary" to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link variant="button" color="textPrimary" to="/users" className={classes.link}>
                        Users
                    </Link>

                </nav>

            </Toolbar>
        </AppBar>

    );
};

export default Header;
