import React from 'react'
import {useParams} from "react-router-dom";

export default function AnimeCharacters(){

    const {idAnime, nameAnime} = useParams()

    return (
        <div>
            personnages de l'anime  {idAnime} {nameAnime}
        </div>
    )
}