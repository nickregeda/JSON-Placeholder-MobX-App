import React, {useEffect} from 'react';
import user from "../../store/user";
import {observer} from "mobx-react-lite";
import UserItem from "./UserItem";

const Users = observer(() => {
    useEffect(() => {
        user.fetchUsers()
    }, [])

    return (
        <div>
            {user.users.map(u => <UserItem key={u.id} user={u}/>)}
        </div>
    );
});

export default Users;