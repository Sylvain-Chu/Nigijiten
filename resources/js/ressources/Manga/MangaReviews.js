import React from 'react'
import {useParams} from "react-router-dom";

export default function MangaReviews(){

    const {idManga, nameManga} = useParams()

    return (
        <div>
            Reviews du manga {idManga} {nameManga}
        </div>
    )
}