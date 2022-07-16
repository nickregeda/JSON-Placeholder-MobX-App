import {makeAutoObservable, runInAction} from "mobx";

class Comment {
    constructor() {
        makeAutoObservable(this)
    }

    comments = []

    fetchComments = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        response = await response.json()
        runInAction(() => {
            this.comments = [...response]
        })
    }
}

export default new Comment()