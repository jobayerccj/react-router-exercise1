import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import Container from "@material-ui/core/Container";
import axios from 'axios';

const posts = [
    {   id: 1,
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {   id: 2,
        title: 'Featured post 2',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    }
];

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        console.log('useEffect has been called!');

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }, []);

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">

                <Grid container spacing={4}>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </Grid>

            </Grid>
        </Container>
    );
};

export default Posts;
