import axios from "axios";

export default function getMovies({ page = 1 } = {}) {
    const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
    const apiUrl = `${REACT_APP_API_URL}3/discover/movie?api_key=${REACT_APP_API_KEY}&language=es&sort_by=popularity.desc&with_genres=27&page=${page}`;

    return axios.get(apiUrl).then((response) => {
        const data = response.data.results;
        const moviesArray = [];
        for (let item of data) {
            const objMovie = {
                id: item.id,
                img: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                title: item.title,
                lang: item.original_language,
                year: item.release_date.substr(0, 4),
            };
            moviesArray.push(objMovie);
        }

        return moviesArray;
    });
}
