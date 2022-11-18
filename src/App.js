import "./App.scss";

// components
import HomePage from "./pages/HomePage/HomePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MeetingsPage from "./pages/MeetingsPage/MeetingsPage";
import HubsPage from "./pages/HubsPage/HubsPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";

// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInterfaceLYT from "./components/UserInterfaceLYT/UserInterfaceLYT";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserInterfaceLYT />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/friends" element={<FriendsPage />} />
                        <Route path="/hubs" element={<HubsPage />} />
                        <Route path="/meetings" element={<MeetingsPage />} />
                        <Route path="/events" element={<EventsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
