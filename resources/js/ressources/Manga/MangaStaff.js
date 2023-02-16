import React from 'react'
import {useParams} from "react-router-dom";

export default function MangaStaff(){

    const {idManga, nameManga} = useParams()

    return (
        <div>
            Staff du manga {idManga} {nameManga}
        </div>
    )
}