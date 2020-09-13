import React from 'react'
import {
    Link
} from "react-router-dom";

export default function MovieCard({ movie }) {

    return (
        <div className="card" key={movie.id}>
            <img className="card-img-top img-thumbnail"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + 'poster'} />

            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p><small>RELEASE DATE: <b>{movie.release_date}</b></small></p>
                <p><small>RATTING: {movie.vote_average}</small></p>
                <p>{movie.overview.slice(0, 100) + '...'}</p>
                <Link className="btn btn-info" to={'movie/' + movie.id}>More Info</Link>
            </div>
        </div>
    )
}
