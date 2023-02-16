import React from 'react'
import {useParams} from "react-router-dom";

export default function AnimeStaff(){

    const {idAnime, nameAnime} = useParams()

    return (
        <div>
            Staff de l'anime {idAnime} {nameAnime}
        </div>
    )
}