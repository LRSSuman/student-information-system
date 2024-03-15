import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { STUDENT_ROUTES } from './RouterConfig';
import StudentHomePage from '../Pages/Student/StudentHomePage/StudentHomePage';

const Router = () => {
    return (
        <>
            <Routes>
                {/* student routes */}
                <Route path='/' element={<h1>authendication</h1>} />
                <Route
                    path={STUDENT_ROUTES.Home}
                    element={<StudentHomePage />}
                />

                {/* teacher routes */}

                {/* admin routes */}
            </Routes>
        </>
    );
};

export default Router;
