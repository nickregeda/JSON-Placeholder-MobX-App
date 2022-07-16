import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import photo from "../../store/photo";
import {observer} from "mobx-react-lite";
import Photos from "../Photos/Photos";

const AlbumItem = observer(({album: {title, id}}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div onClick={() => {
                navigate(`/albums/${id}`)
            }}>{title}</div>
            <div>
                <Photos photos_type={'preview'} albumId={id}/>
            </div>
        </div>
    );
});

export default AlbumItem;