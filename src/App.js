import { useMemo, useState } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router';
import { Navbar } from './components/Navbar'
import { UserContext } from './context/UserContext'
import { PostsContext } from './context/PostsContext';
import UserPosts from './components/Posts/UserPosts'
import AddPost from './crud/AddPost';
import Home from './pages/Home';
function App()
{
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const providerValue = useMemo(() => ({ user, setUser, isLoggedIn, setIsLoggedIn }), [user, setUser, isLoggedIn, setIsLoggedIn])

  const [posts, setPosts] = useState(null);
  const postProvider = useMemo(() => ({ posts, setPosts }), [posts, setPosts])


  return (
    <UserContext.Provider value={providerValue}>
      <PostsContext.Provider value={postProvider}>
        <div className="App">

          <div className="bg-gray-900 border-b border-gray-700">
            <Navbar />
          </div>
          <div className="container mx-auto mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>

                <Route path="/addPost" element={<AddPost />} />
                <Route path="/userPosts" element={<UserPosts />} />

              </Route>
            </Routes>
          </div>

        </div>
      </PostsContext.Provider>
    </UserContext.Provider>

  );
}

const ProtectedRoute = ({ isLoggedIn }) =>
{
  let location = useLocation();
  console.log(isLoggedIn)
  if (!isLoggedIn)
  {
    return <Navigate to="/" state={{ from: location }} />
  }

  return <Outlet />
}


export default App;
