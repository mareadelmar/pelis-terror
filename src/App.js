import "./App.css";
import { Route } from "wouter";
import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageDetails from "./pages/PageDetails";
import PageMovies from "./pages/PageMovies";
import PageResult from "./pages/PageResult";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserContextProvider } from "./context/UserContext";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Header />
                <Route path="/movie/:id" component={PageDetails} />
                <Route path="/movies/:page" component={PageMovies} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/search/:keyword/:page" component={PageResult} />
                <Route path="/" component={PageHome} />
            </UserContextProvider>
        </div>
    );
}

export default App;
