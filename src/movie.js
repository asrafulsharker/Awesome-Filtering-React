function Movie(movie){
    return(
        <div>
            <h2>Title</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}/>
        </div>
    )
}

export default Movie;