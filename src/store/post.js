import {makeAutoObservable, runInAction} from "mobx";

class Post {
    constructor() {
        makeAutoObservable(this)
    }

    posts = []
    post = {}

    async fetchPosts(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        response = await response.json()
        runInAction(() => {
            this.posts = [...response]
        })
    }

    async fetchPost(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        response = await response.json()
        runInAction(() => {
            this.post = {...response}
        })
    }
}

export default new Post()