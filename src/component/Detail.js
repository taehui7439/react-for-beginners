import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail"

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovie(json.data.movie);
    };

    console.log(movie);

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <MovieDetail
                title={movie.title_long}
                coverImg={movie.medium_cover_image}
                description={movie.description_intro}
                genres={movie.genres}
                url={movie.url}
                rating={movie.rating} />
        </div>
    )
}

export default Detail;