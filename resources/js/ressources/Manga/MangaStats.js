import React from 'react'
import {useParams} from "react-router-dom";

export default function MangaStats(){

    const {idManga, nameManga} = useParams()

    return (
        <div>
            Stats du manga {idManga} {nameManga}
        </div>
    )
}