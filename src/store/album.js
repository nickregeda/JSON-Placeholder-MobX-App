import {makeAutoObservable, runInAction} from "mobx";

class Album {
    constructor() {
        makeAutoObservable(this)
    }

    albums = []
    album = {}

    fetchAlbums = async (userId) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        response = await response.json()
        runInAction(() => {
            this.albums = [...response]
        })
    }

    fetchAlbum = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        response = await response.json()
        runInAction(() => {
            this.album = {...response}
        })
    }
}

export default new Album()