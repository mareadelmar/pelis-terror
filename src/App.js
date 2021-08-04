import "./App.css";
import { Route } from "wouter";
import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageDetails from "./pages/PageDetails";
import PageMovies from "./pages/PageMovies";
import PageResult from "./pages/PageResult";
import PageFavs from "./pages/PageFavs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageProfile from "./pages/PageProfile";
import { UserContextProvider } from "./context/UserContext";
//import ErrorVisual from "./components/ErrorVisual";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./config/themeConfig";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <Header />
                    <Route path="/movie/:id" component={PageDetails} />
                    <Route path="/movies/:page" component={PageMovies} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route
                        path="/search/:keyword/:page"
                        component={PageResult}
                    />
                    <Route path="/favorites" component={PageFavs} />
                    <Route path="/profile" component={PageProfile} />
                    <Route path="/" component={PageHome} />
                    {/* <Route path=" " component={ErrorVisual} /> */}
                </UserContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
