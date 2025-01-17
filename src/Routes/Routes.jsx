import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Support from "../Pages/Support/Support";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllGames from "../Pages/AllGames/AllGames";
import Blogs from "../Pages/Blogs/Blogs";
import GamesDetails from "../Pages/GamesDetails/GamesDetails";
import SingleBlog from "../Pages/Blogs/SingleBlog/SingleBlog";
import Esports from "../Pages/Esports/Components/Esports";
import Dashboard from "../Layout/Dashboard";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import AddToCart from "../Pages/Dashboard/Members/AddToCart/AddToCart";
import Profile from "../Pages/Dashboard/DashboardComponents/Profile";
import BlogManagement from "../Pages/Dashboard/Admin/BlogsManagement/BlogManagement";
import Error from "../Components/Error/Error";
import Tournament from "../Pages/Tournament/Tournament";
import Gallery from "../Pages/Gallery/Gallery";
import Test2 from "../Pages/Dashboard/Members/CalenderEvents/CalenderEvents";
import Test1 from "../Pages/Dashboard/Admin/Test1/Test1";
import ProfileEdit from "../Pages/Dashboard/DashboardComponents/ProfileEdit";
import EnrolledTournaments from "../Pages/Dashboard/Members/EnrolledTournaments/EnrolledTournaments";
import MatchDetails from "../Pages/Tournament/Matches/MatchDetails/MatchDetails";
import CommentAndReviewManage from "../Pages/Dashboard/Members/Chat/CommentAndReviewManage/CommentAndReviewManage";
import AddTournament from "../Pages/Tournament/AddTournament/AddTournament";
import SingleTournamentDetails from "../Pages/Tournament/CustomTournaments/SingleTournamentDetails";
import BookMarkItems from "../Pages/Dashboard/Members/BookMarkedItems/BookMarkItems";

import MatchFixereManage from "../Pages/Dashboard/DashboardComponents/MatchFixereManage/MatchFixereManage";
import AddBlog from "../Pages/Dashboard/Admin/AddBlog/AddBlog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/allgame",
        element: <AllGames />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/games/:id",
        element: <GamesDetails />,
      },
      {
        path: "/esports",
        element: <Esports />,
      },
      {
        path: "/espMatchFixered/:id",
        element: <MatchDetails />,
      },
      {
        path: "/tournament",
        element: <Tournament />,
      },
      {
        path: "/addTournament",
        element: <AddTournament />,
      },
      {
        path: "/singleTournamentDetail/:id",
        element: <SingleTournamentDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "selectedGames",
        element: <AddToCart />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "blogManagement",
        element: <BlogManagement />,
      },
      {
        path: "addblog",
        element: <AddBlog />,
      },
      {
        path: "test1",
        element: <Test1 />,
      },
      {
        path: "test2",
        element: <Test2 />,
      },
      {
        path: "editProfile",
        element: <ProfileEdit />,
      },
      {
        path: "enrolledTournaments",
        element: <EnrolledTournaments />,
      },
      {
        path: "commentReviewManage",
        element: <CommentAndReviewManage />,
      },
      {
        path: "bookmarkItems",
        element: <BookMarkItems />,
      },
      {
        path: "matchFixerManage",
        element: <MatchFixereManage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
