import React from 'react';
import {observer} from "mobx-react-lite";

const CommentItem = observer(({comment: {name, email, body}}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
});

export default CommentItem;