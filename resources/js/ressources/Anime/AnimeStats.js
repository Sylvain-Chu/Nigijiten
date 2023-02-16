import React from 'react'
import {useParams} from "react-router-dom";

export default function AnimeStats(){

    const {idAnime, nameAnime} = useParams()

    return (
        <div>
            Stats de l'anime {idAnime} {nameAnime}
        </div>
    )
}