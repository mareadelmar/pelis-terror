import axios from "axios";

export default function getMovie(props) {
    const { id } = props;

    const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=3487d2eedff804c9332438bb4174c822`;

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
        };
        console.log(movieData);
        return movieData;
    });
}

/*
data.tagline
data.popularity
data.vote_average
data.vote_count
*/
