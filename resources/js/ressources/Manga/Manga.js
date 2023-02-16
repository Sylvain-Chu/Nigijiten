import React from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Manga(){

    const {idManga, nameManga} = useParams()


    return (
        <div>
            Voici le manga {idManga} {nameManga}

            <ul>
                <li>
                    <Link to={`/manga/${idManga}/${nameManga}/staff`}>staff</Link>
                </li>
                <li>
                    <Link to={`/manga/${idManga}/${nameManga}/characters`}>characters</Link>
                </li>
                <li>
                    <Link to={`/manga/${idManga}/${nameManga}/reviews`}>reviews</Link>
                </li>
                <li>
                    <Link to={`/manga/${idManga}/${nameManga}/stats`}>stats  </Link>
                </li>
            </ul>
        </div>
    )
}