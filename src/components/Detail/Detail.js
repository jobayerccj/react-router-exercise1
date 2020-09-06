import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import axios from "axios";
import Comment from "../Comment/Comment";

const Detail = (props) => {
    const { id } = useParams();
    const { classes, footers }= props;

    const [detail, setDetail] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts/' + id
        })
        .then(function (response) {
            setDetail(response.data);

        });

    }, []);

    useEffect(() =>{

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts/'+ id +'/comments'
        })
        .then(function (response) {
            setComments(response.data);

        });
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <br/>
            <br/>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={12}>
                            <CardActionArea >
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {detail.title}
                                            </Typography>

                                            <Typography variant="subtitle1" paragraph>
                                                {detail.body}
                                            </Typography>

                                            <Typography component="h3" variant="h6">
                                                {comments.length} Comments
                                            </Typography>
                                            <hr/>
                                                {
                                                    comments.map(comment =>  <Comment key={comment.id} detail={comment}/>)
                                                }
                                        </CardContent>
                                    </div>
                                    {/*<Hidden xsDown>*/}
                                    {/*    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />*/}
                                    {/*</Hidden>*/}


                                </Card>
                            </CardActionArea>
                            <br/>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>


            <Footer classes={classes} footers={footers}/>
        </React.Fragment>
    );
};

export default Detail;
