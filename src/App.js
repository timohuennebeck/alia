import "./App.scss";

// components
import HomePage from "./pages/HomePage/HomePage";
import UpcomingEventsPage from "./pages/UpcomingEventsPage/UpcomingEventsPage";
import UpcomingMeetingsPage from "./pages/UpcomingMeetingsPage/UpcomingMeetingsPage";
import FavoriteHubsPage from "./pages/FavoriteHubsPage/FavoriteHubsPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage.jsx";
import EventsPage from "./pages/EventsPage/EventsPage";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInterfaceLYT from "./components/UserInterfaceLYT/UserInterfaceLYT";
import TrendingPage from "./pages/TrendingPage/TrendingPage";
import SearchInterfaceLYT from "./components/SearchInterfaceLYT/SearchInterfaceLYT";
import CommentsPage from "./pages/WatchCommentsPage/WatchCommentsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import FriendsProfilePage from "./pages/FriendsProfilePage/FriendsProfilePage";
import FilesPage from "./pages/FilesPage/FilesPage";
import HubsPage from "./pages/HubsPage/HubsPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserInterfaceLYT />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/friends" element={<FriendsPage />} />
                        <Route path="/trending" element={<TrendingPage />} />
                        <Route path="/favorite-hubs" element={<FavoriteHubsPage />} />
                        <Route path="/upcoming-meetings" element={<UpcomingMeetingsPage />} />
                        <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
                    </Route>
                    <Route element={<SearchInterfaceLYT />}>
                        <Route path="/comments" element={<CommentsPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/friends-profile" element={<FriendsProfilePage />} />
                        <Route path="/files" element={<FilesPage />} />
                        <Route path="/meetings" element={<MeetingsPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/hubs" element={<HubsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
