import {makeAutoObservable, runInAction} from "mobx";

class User {
    constructor() {
        makeAutoObservable(this, {deep: true})
    }

    //State
    users = []
    user = {}

    //Actions
    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                runInAction(() => {
                    this.users = [...response]
                })
            })
    }

    fetchUser(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(response => {
                runInAction(() => {
                    this.user = {...response}
                })
            })
    }
}

export default new User()