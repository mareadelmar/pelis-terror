import axios from "axios";

export default function getMovies({ page = 1 } = {}) {
    console.log(page);
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=3487d2eedff804c9332438bb4174c822&sort_by=popularity.desc&with_genres=27&page=${page}`;

    return axios.get(apiUrl).then((response) => {
        const data = response.data.results;
        const moviesArray = [];
        data.map((item) => {
            const objMovie = {
                id: item.id,
                img: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                title: item.title,
                lang: item.original_language,
                year: item.release_date.substr(0, 4),
            };
            moviesArray.push(objMovie);
        });

        return moviesArray;
    });
}
