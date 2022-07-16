import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import post from "../../store/post";
import Comments from "../Comments/Comments";
import {observer} from "mobx-react-lite";

const PostPage = observer(() => {
    const params = useParams()

    useEffect(() => {
        post.fetchPost(params.postId)
    }, [])

    const p = post.post

    return (
        <div>
            <h1>Post</h1>
            <div>{p.title}</div>
            <div>{p.body}</div>
            <h2>Comments</h2>
            <div>
                <Comments postId={p.id}/>
            </div>
        </div>
    );
});

export default PostPage;