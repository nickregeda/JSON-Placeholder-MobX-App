import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import post from "../../store/post";
import PostItem from "./PostItem";

const Posts = observer(({userId}) => {
    useEffect(() => {
        post.fetchPosts(userId)
    }, [userId])

    const main_title_style = {fontSize: 30, margin: '10px 0'}

    return (
        <div>
            <div style={main_title_style}>Posts</div>
            <div>
                {post.posts.map(p => <PostItem key={p.id} post={p}/>)}
            </div>
        </div>
    );
});

export default Posts;