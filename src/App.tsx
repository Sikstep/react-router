import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import s from './App.module.css'

// const Profile = () => {
//
//     const params = useParams<'x' | 'y'>()
//
//     const some = params
//
//     console.log(some)
//
//     return <div>profile</div>
// }

const Profile = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (true) navigate('/login')
    // }, [])

    return (
        <div>

            profile
            <button onClick={() => {navigate(-1)}}>logout</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---

            <NavLink
                to={'/profile'}
                style={(params) => {
                    return {color: params.isActive ? 'lightblue' : ''}
                }}>
                profile
            </NavLink>---
            <NavLink
                to={'/profile/settings'}
                className={(params) => params.isActive ? s.act : s.def}
                >
                settings
            </NavLink>---

            <a
                href={'https://github.com/IgnatZakalinsky/simple-react-homeworks'}
                target={'_blank'}
                rel={'noreferrer nofollow noopener'}
            >
                xxx
            </a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>


        </div>
    )
        ;
}

export default App;
