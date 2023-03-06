import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from 'react-router-dom';

const Profile = () => {

    const params = useParams<'x' | 'y'>()

    const some = params

    console.log(some)

    return <div>profile</div>
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink to={'/profile'}>profile</NavLink>---
            <NavLink to={'/profile/1'}>profile/1</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile/:x/:y'} element={<Profile/>}/>
            </Routes>


        </div>
    )
        ;
}

export default App;
