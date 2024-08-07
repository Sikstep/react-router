import React from 'react';
import styles from './components/Site.module.css';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Error404} from './components/pages/Error404';
import Model from './components/pages/Model';
import {Abibas} from './components/pages/Abibas';
import {Prices} from './components/pages/Prices';
import {ProtectedPage} from './components/pages/ProtectedPage';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PAGE5: '/protectedpage',
    PAGE_ERROR: '/page/error404'
} as const


function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={PATH.PAGE1} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Adidas</NavLink></div>
                    <div><NavLink to={PATH.PAGE2} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Puma</NavLink></div>
                    <div><NavLink to={PATH.PAGE3} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Abibas</NavLink></div>
                    <div><NavLink to={PATH.PAGE4} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Prices</NavLink></div>
                    <div><NavLink to={PATH.PAGE5} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Protected Page</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>
                        <Route path={PATH.PAGE5} element={<ProtectedPage/>}/>
                        <Route path={'/:brand/:id'} element={<Model/>}/>


                        {/*<Route path={PATH.PAGE_ERROR} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={'/error404'}/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2024</div>
        </div>
    );
}



export default App;
