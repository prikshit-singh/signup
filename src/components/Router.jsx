import React from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from './Privateroute';


export default function Router() {
    const userExist = false
    function AuthCheck() {
        if (userExist) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <div>
                <BrowserRouter basename={'/'} >
                    <Suspense fallback='Loading...'>
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/signup" element={<Signup />} />
                            <Route exact path="/" element={<PrivateRoute currentUser={AuthCheck()} > <Home /> </PrivateRoute>} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </div>
        </>
    )
}
