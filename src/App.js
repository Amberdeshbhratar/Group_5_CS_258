import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import Pairprogramming from './components/Pairprogramming';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Compiler from './pages/Compiler';
import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => true);
    const [theme, setTheme] = useState("vs-dark");
    const [username,setusername] = useState(null);
    const { user, isAuthenticated } = useAuth0();
    useEffect(() => {
        if (isDarkMode) {
            document.body.className = 'DarkTheme'
            setTheme("vs-dark")
        }
        else {
            setTheme("vs-light")
            document.body.className = 'LightTheme'
        }
    }, [isDarkMode])

    useEffect(() => {
        if(isAuthenticated){
            setusername(user.nickname);
            console.log(username)
        }
        else{
            setusername(null);
            console.log(username)
        }
    },[isAuthenticated, user, username])

    return (
        <>
            <div>
                <div>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            success: {
                                theme: {
                                    primary: '#4aed88',
                                },
                            },
                        }}
                    ></Toaster>
                </div>
                <BrowserRouter>
                    <Navbar user={user} isAuthenticated={isAuthenticated} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
                    {/* <Pairprogramming ></Pairprogramming> */}
                    <Routes>
                        <Route path="/meeting" element={<Home username={username} />}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        >
                        </Route>
                        {/* <Route path="/Contactus" element={<Contactus />}></Route>
                        <Route path="/Aboutus" element={<Aboutus />}></Route> */}
                        <Route path="/" element={<Compiler/>}></Route>
                        <Route
                        path="/editor/:roomId"
                        element={<EditorPage />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
