import React from 'react'
import {useParams} from "react-router-dom";

export default function MangaCharacters(){

    const {idManga, nameManga} = useParams()

    return (
        <div>
            personnages du manga {idManga} {nameManga}
        </div>
    )
}