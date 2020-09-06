import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright/Copyright";


const Home = (props) => {
    const {classes, footers}= props;

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <br/>
            <br/>

            <Posts/>

            {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link to="/" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
            {/* End footer */}
        </React.Fragment>

    );
};

export default Home;
