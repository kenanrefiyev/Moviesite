import React, { useState } from 'react';

function Moviecard(props) {
    const API_IMG = 'https://image.tmdb.org/t/p/w500/';
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='card'>
            <div className="poster">
                <img src={API_IMG + props.poster_path} alt={props.title} />
            </div>
            <div className="info">
                <p className='title'>{props.title}</p>
                <p className='vote'>IMDB: {props.vote_average}</p>
                <button 
                    className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} 
                    onClick={handleFavoriteClick}>
                    {isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
            </div>
        </div>
    );
}

export default Moviecard;
