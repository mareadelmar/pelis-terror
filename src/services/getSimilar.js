import axios from "axios";

export default function getSimilar(props) {
    const { id } = props;
    const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
    const apiURL = `${REACT_APP_API_URL}3/movie/${id}/similar?api_key=${REACT_APP_API_KEY}&language=es`;
    const terrorId = 27;

    return axios.get(apiURL).then((response) => {
        const data = response.data.results;
        const movieSimilars = [];

        for (let item of data) {
            if (item.genre_ids) {
                if (item.genre_ids.includes(terrorId)) {
                    const objMovie = {
                        id: item.id,
                        img: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        title: item.title,
                        lang: item.original_language,
                        year: item.release_date.substr(0, 4),
                    };
                    movieSimilars.push(objMovie);
                }
            }
        }

        return movieSimilars;
    });
}
