import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDetail({ title, coverImg, description, genres, url, rating }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <div>
                <h2>{title}</h2>
                {/* <p>
                    Genres:
                    {genres.map((genre, index) => (
                        <span key={index}>{genre}, </span>
                    ))}
                </p>  */}
                {/* <p>
                    {description.length > 600 ? `${description.slice(0, 600)}...` : description}
                </p> */}
                <h4>Movie Rating: {rating}</h4>
                <hr />

            </div>
            <div>
                <a href={url}>
                    Go to the site
                </a>
                <br />
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

MovieDetail.PropTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
}

export default MovieDetail;