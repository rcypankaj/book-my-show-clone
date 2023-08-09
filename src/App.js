import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/Error/Error";
import PlayPage from "./pages/PlayPage";
import MoviePage from "./pages/MoviePage";
import "./App.css";

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterPage from "./pages/FilterPage";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        id: "movie-event",
        element: <MoviePage />,
      },
      { path: "plays", element: <PlayPage /> },
      { path: "/filterMovie", element: <FilterPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
