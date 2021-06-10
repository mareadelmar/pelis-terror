import axios from "axios";
const key = "3487d2eedff804c9332438bb4174c822";

export default function getSearch({ keyword }) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=es&query=${keyword}`;
    const terrorId = 27;
    return axios.get(url).then((res) => {
        const { data } = res;
        const { results } = data;
        console.log(res);
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
        console.log(terrorMovies);
        return terrorMovies;
    });
}
