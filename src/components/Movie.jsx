import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function setVoteClass(vote) {
    if(vote>=8) {
        return 'green';
    } else if(vote>=6) {
        return 'orange';
    } else {
        return 'red';
    }
}

function Movie({title,poster_path,vote_average,overview}) {

    return (
        <div className="movie">
            <img src={poster_path ? IMAGE_API+poster_path : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'} alt="movie-poster" />
            <div className="movie-info">
                <h3>{title}</h3>
                <span
                className={`tag ${setVoteClass(vote_average)}`}
                >{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <span>{overview}</span>
            </div>
        </div>
    )
}

export default Movie;