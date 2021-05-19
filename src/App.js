import "./App.css";
import { Route } from "wouter";
import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageDetails from "./pages/PageDetails";
import PageMovies from "./pages/PageMovies";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <Header />
            <Route path="/movie/:id" component={PageDetails} />
            <Route path="/movies/:page" component={PageMovies} />
            <Route path="/login" component={Login} />
            <Route path="/" component={PageHome} />
        </div>
    );
}

export default App;
