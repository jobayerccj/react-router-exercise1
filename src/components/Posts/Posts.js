import React from 'react';
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import Container from "@material-ui/core/Container";

const posts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    }
];

const Posts = () => {

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">

                <Grid container spacing={4}>
                    {posts.map((post) => (
                        <Post key={post.title} post={post} />
                    ))}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Posts;
