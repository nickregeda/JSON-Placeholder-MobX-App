import React from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const PostItem = observer(({post: {id, title, body}}) => {
    const container_style = {marginTop: 20}
    const title_style = {fontSize: 18, fontWeight: 'bold'}
    const body_style = {fontSize: 16}

    const navigate = useNavigate()

    return (
        <div style={container_style}>
            <div onClick={() => navigate(`/posts/${id}`)} style={title_style}>{title}</div>
            <div style={body_style}>{body}</div>
        </div>
    );
});

export default PostItem;