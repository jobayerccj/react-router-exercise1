import React from 'react';

const Comment = (props) => {
    const {detail} = props;
    console.log(detail.body);

    return (
        <li>
            { detail.body } by <b>{detail.email}</b>
        </li>
    );
};

export default Comment;
