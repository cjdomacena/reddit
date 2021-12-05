import { useMemo, useState } from 'react'
import { Route, Routes } from 'react-router';
import { Navbar } from './components/Navbar'
import { UserContext } from './context/UserContext'
import AddPost from './crud/AddPost';
import Home from './pages/Home';
function App()
{
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const providerValue = useMemo(() => ({user, setUser, isLoggedIn, setIsLoggedIn}), [user,setUser,isLoggedIn,setIsLoggedIn])
  return (
    <UserContext.Provider value={providerValue}>
      <div className="App">

        <div className="bg-gray-900 border-b border-gray-700">
          <Navbar />
        </div>
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addPost" element={<AddPost />} />
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </div>

      </div>
    </UserContext.Provider>

  );
}

export default App;
