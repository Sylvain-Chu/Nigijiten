import React from 'react'
import {useParams} from "react-router-dom";

export default function AnimeReviews(){

    const {idAnime, nameAnime} = useParams()

    return (
        <div>
            Reviews de l'anime {idAnime} {nameAnime}
        </div>
    )
}