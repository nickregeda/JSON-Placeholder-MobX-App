import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import user from '../../store/user'
import Posts from "../Posts/Posts";
import Albums from "../Albums/Albums";

const UserPage = observer(() => {
    const params = useParams()

    useEffect(() => {
        user.fetchUser(params.userId)
    }, [])

    const u = user.user
    return (
        <div>
            <div>{u.name}</div>
            <div>{u.username}</div>
            <div>{u.email}</div>
            {u.address &&
                <div>
                    <div>{u.address.city}</div>
                    <div>{u.address.street}</div>
                </div>
            }
            <div>
                <Posts userId={u.id}/>
            </div>
            <div>
                <Albums userId={u.id}/>
            </div>
        </div>
    );
});

export default UserPage;