import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Config from '../config/config';


export default function DetailMovie(props) {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const findMovie = async () => {
        try {
            const url = `${Config.api_movie}${Config.find_endpoint}${id}?${Config.api_key}&language=es&include_adult=false`;
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        findMovie()
    }, [props])

    return (
        <div className="card mt-5 mb-3" key={movie.id}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img-top img-thumbnail"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + 'poster'} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{movie.title}</h3>
                        <p><small>RELEASE DATE: <b>{movie.release_date}</b></small></p>
                        <p><small>RATTING:  <b>{movie.vote_average}</b></small></p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
