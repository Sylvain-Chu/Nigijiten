import React from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Anime(){

    const {idAnime, nameAnime} = useParams()

    return (
        <div>
            Voici l'anime {idAnime} {nameAnime}

            <ul>
                <li>
                    <Link to={`/anime/${idAnime}/${nameAnime}/staff`}>staff</Link>
                </li>
                <li>
                    <Link to={`/anime/${idAnime}/${nameAnime}/characters`}>characters</Link>
                </li>
                <li>
                    <Link to={`/anime/${idAnime}/${nameAnime}/reviews`}>reviews</Link>
                </li>
                <li>
                    <Link to={`/anime/${idAnime}/${nameAnime}/stats`}>stats  </Link>
                </li>
            </ul>
        </div>
    )
}