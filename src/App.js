import './App.css';
import {Routes, Route} from "react-router-dom";
import Users from "./components/Users/Users";
import UserPage from "./components/Users/UserPage";
import PostPage from "./components/Posts/PostPage";
import AlbumPage from "./components/Albums/AlbumPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Users/>}/>
                <Route path={'/users/:userId'} element={<UserPage/>}/>
                <Route path={'/posts/:postId'} element={<PostPage/>}/>
                <Route path={'/albums/:albumId'} element={<AlbumPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
