import React, { useState } from 'react'
import MovieCard from './MovieCard'
import Config from '../config/config.js';

export default function SearchMovie(props) {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `${Config.api_movie}${Config.search_endpoint}?${Config.api_key}&language=es&query=${query}&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form className="justify-content-center form-inline mt-4" onSubmit={searchMovies}>
                <div className="form-group">
                    <label className="mr-3" htmlFor="query">Movie Name</label>
                    <input className="form-control" type="text" name="query"
                        placeholder="i.e Jurasicc Park" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
            <div className="card-columns mt-5">
                {movies.filter(movie => movie.poster_path).map(movie =>
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    )

}
