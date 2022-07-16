import React from 'react';
import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import photo from "../../store/photo";
import PhotoItem from "./PhotoItem";

const Photos = observer(({albumId, photos_type}) => {
    useEffect(() => {
        if (photos_type === 'full') {
            photo.fetchPhotos(albumId, 10)
        } else if (photos_type === 'preview') {
            photo.fetchPreviewPhotos(albumId, 6)
        }
    }, [albumId])

    return (
        <div>
            {
                photos_type === 'full' ?
                    photo.photos.map(p => <PhotoItem key={p.id} photo={p}/>)
                    :
                    photo.preview_photos.map(p1 =>
                        p1.albumId === albumId &&
                        p1.pre_photos.map(p2 => <PhotoItem key={p2.id} photo={p2}/>)
                    )}
        </div>
    );
});

export default Photos;