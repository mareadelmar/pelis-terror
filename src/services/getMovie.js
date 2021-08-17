import axios from "axios";

export default function getMovie(props) {
    const { id } = props;
    const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
    const apiURL = `${REACT_APP_API_URL}3/movie/${id}?api_key=${REACT_APP_API_KEY}&language=es`;

    return axios.get(apiURL).then((response) => {
        const data = response.data;
        const movieGenres = data.genres.map((item) => {
            return ` ${item.name}`;
        });

        const movieData = {
            id: id,
            img: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            title: data.title,
            lang: data.original_language,
            year: data.release_date.substr(0, 4),
            overview: data.overview,
            genres: [movieGenres],
            imdb: `https://www.imdb.com/title/${data.imdb_id}`,
        };
        return movieData;
    });
}

/*
data.tagline
data.popularity
data.vote_average
data.vote_count
*/
