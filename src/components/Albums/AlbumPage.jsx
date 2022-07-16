import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import album from "../../store/album";
import {observer} from "mobx-react-lite";
import Photos from "../Photos/Photos";

const AlbumPage = observer(() => {
    const params = useParams()


    useEffect(() => {
        album.fetchAlbum(params.albumId)
    }, [])

    return (
        <div>
            <h1>{album.album.title}</h1>
            <Photos photos_type={'full'} albumId={album.album.id}/>
        </div>
    );
});

export default AlbumPage;