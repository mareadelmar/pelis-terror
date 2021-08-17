import axios from "axios";

export default function getSearch({ keyword }) {
    const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
    const url = `${REACT_APP_API_URL}3/search/multi?api_key=${REACT_APP_API_KEY}&language=es&query=${keyword}`;
    const terrorId = 27;
    return axios.get(url).then((res) => {
        const { data } = res;
        const { results } = data;
        let terrorMovies = [];

        for (let item of results) {
            if (item.genre_ids) {
                if (item.genre_ids.includes(terrorId)) {
                    const objMovie = {
                        id: item.id,
                        img: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                        title: item.title,
                        lang: item.original_language,
                        year: item.release_date.substr(0, 4),
                    };
                    terrorMovies.push(objMovie);
                }
            }
        }
        return terrorMovies;
    });
}
