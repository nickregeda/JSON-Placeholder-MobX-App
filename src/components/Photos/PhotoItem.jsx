import React from 'react';
import {observer} from "mobx-react-lite";

const PhotoItem = observer(({photo: {id, title, url, thumbnailUrl}}) => {

    let img_style = {width: 100}

    return (
        <img style={img_style} src={url} alt=""/>
    );
});

export default PhotoItem;