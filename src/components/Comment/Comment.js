import React, {useEffect, useState} from 'react';
import axios from "axios";

const Comment = (props) => {
    const {detail} = props;
    const [image, setImage] = useState("");

    useEffect(() =>{

        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/photos/' + detail.id
        })
        .then(function (response) {
            setImage(response.data.thumbnailUrl);
            console.log(response.data.thumbnailUrl);

        });
    }, []);

    return (
        <li style={{"listStyle": "none"}}>
            <img src={image} style={{"width":"4%","borderRadius": "15px", "verticalAlign":"middle"}}/> <b>{detail.email}</b> { detail.body }
        </li>
    );
};

export default Comment;
