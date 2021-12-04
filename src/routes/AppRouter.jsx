import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Main } from '../pages/Main';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Main />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
