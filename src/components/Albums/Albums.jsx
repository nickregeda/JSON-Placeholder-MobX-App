import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import album from "../../store/album";
import AlbumItem from "./AlbumItem";

const Albums = observer(({userId}) => {
    useEffect(() => {
        album.fetchAlbums(userId)
    }, [userId])

    const title_style = {fontSize: 30, margin: '10px 0'}

    return (
        <div>
            <div style={title_style}>Albums</div>
            <div>
                {album.albums.map(a => <AlbumItem key={a.id} album={a}/>)}
            </div>
        </div>
    );
});

export default Albums;