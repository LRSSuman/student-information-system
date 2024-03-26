import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { STUDENT_ROUTES, TEACHER_ROUTES } from './RouterConfig';
import StudentHomePage from '../Pages/Student/StudentHomePage/StudentHomePage';
import TeacherPage from '../Pages/Student/TeachersPage/TeacherPage';
import SubjectPage from '../Pages/Student/SubjectPage/SubjectPage';
import TimeTablePage from '../Pages/Student/TimeTablePage/TimeTablePage';
import AuthendicationPage from '../Pages/Authendication/AuthendicationPage';
import PageNotFound from '../Pages/404Page/PageNotFound';
import TeacherHomePage from '../Pages/Teacher/TeacherHomePage/TeacherHomePage';
import StudentsPage from '../Pages/Teacher/StudentsPage/StudentsPage';

const Router = () => {
    return (
        <>
            <Routes>
                {/* student routes */}
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<AuthendicationPage />} />
                <Route path='/student'>
                    <Route
                        path={STUDENT_ROUTES.Home}
                        element={<StudentHomePage />}
                    />
                    <Route
                        path={STUDENT_ROUTES.Teachers}
                        element={<TeacherPage />}
                    />
                    <Route
                        path={STUDENT_ROUTES.Subjects}
                        element={<SubjectPage />}
                    />
                    <Route
                        path={STUDENT_ROUTES.TimeTable}
                        element={<TimeTablePage />}
                    />
                </Route>

                {/* teacher routes */}
                <Route path='/teacher'>
                    <Route
                        path={TEACHER_ROUTES.Home}
                        element={<TeacherHomePage />}
                    />
                    <Route
                        path={TEACHER_ROUTES.Students}
                        element={<StudentsPage />}
                    />
                    <Route
                        path={TEACHER_ROUTES.Subjects}
                        element={<SubjectPage />}
                    />
                    <Route
                        path={TEACHER_ROUTES.TimeTable}
                        element={<TimeTablePage />}
                    />
                </Route>

                {/* admin routes */}
            </Routes>
        </>
    );
};

export default Router;
