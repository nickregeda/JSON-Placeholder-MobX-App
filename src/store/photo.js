import {makeAutoObservable, runInAction} from "mobx";
import album from "./album";

class Photo {
    constructor() {
        makeAutoObservable(this)
    }

    photos = []
    preview_photos = []
    photo = {}

    fetchPhotos = async (albumId, limit) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=${limit}`)
        response = await response.json()
        runInAction(() => {
            this.photos = [...response]
        })
    }

    fetchPreviewPhotos = async (albumId, limit) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=${limit}`)
        response = await response.json()
        runInAction(() => {
            this.preview_photos = this.preview_photos.some(p => p.albumId === albumId) ? this.preview_photos :
                [...this.preview_photos, {albumId, pre_photos: [...response]}]
        })
    }

    fetchPhoto = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos${id}`)
        response = await response.json()
        runInAction(() => {
            this.photo = {...response}
        })
    }
}

export default new Photo()