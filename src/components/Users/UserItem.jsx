import React from 'react';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const UserItem = observer(({user: {id, name, username, email, address: {city, street}}}) => {
    const navigate = useNavigate()

    const name_style = {maxWidth: 115, wordWrap: 'break-word', cursor: 'pointer'}
    const activeName = (name) => {
        name.style.textDecoration = 'underline'
    }
    const unActiveName = (name) => {
        name.style.textDecoration = 'none'
    }

    return (
        <div>
            <div onClick={() => navigate(`/users/${id}`)}
                 style={name_style}
                 onMouseOver={(e) => activeName(e.target)}
                 onMouseLeave={(e) => unActiveName(e.target)}>{name}</div>
            <div>@{username}</div>
            <div>email: <i>{email}</i></div>
            <div>address:</div>
            <div>{city}</div>
            <div>{street}</div>
            <br/>
        </div>
    );
});

export default UserItem;