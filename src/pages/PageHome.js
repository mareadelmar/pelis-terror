import React from "react";
//import "./PageHome.css";

/*
LLAMADA A API: 
- discover con filtros average en orden descendente y género terror
- pasa la info a cards
*/

const PageHome = () => {
    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     getMovies().then((moviesArray) => {
    //         console.log(moviesArray);
    //         setMovies(moviesArray);
    //     });
    // }, []);

    return (
        <section className="">
            {/* {movies.map((item) => {
                const movieDetails = `${item.lang} – ${item.year}`;
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        image={item.img}
                        details={movieDetails}
                    />
                );
            })} */}
        </section>
    );
};

export default PageHome;
