import React, {useEffect} from 'react';
import comment from "../../store/comment";
import {observer} from "mobx-react-lite";
import CommentItem from "./CommentItem";

const Comments = observer(({postId}) => {
    useEffect(() => {
        comment.fetchComments(postId)
    }, [postId])


    return (
        <div>
            {comment.comments.map(c => <CommentItem key={c.id} comment={c}/>)}
        </div>
    );
});

export default Comments;