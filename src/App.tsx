import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from 'react-router-dom';

const Profile = () => {

    const params = useParams()

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
            <NavLink to={'/profile/settings'}>settings</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={(
                    <div>
                        profile
                        <Outlet/>
                    </div>
                )}>
                    <Route path={'*'} element={<div>Profile page not found</div>}/>
                    <Route path={':id'} element={<div>id</div>}/>
                    <Route path={'settings'} element={<div>settings</div>}/>
                </Route>
            </Routes>


        </div>
    )
        ;
}

export default App;
