import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setScreen } from "../store/actions/screen.action"
// import { useState } from "react"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import logoImg from '../assets/img/logo.png'

export const AppHeader = () => {
    const { isOpenScreen } = useSelector(storeState => storeState.screenModule)
    const dispatch = useDispatch()

    // useEffect(() => {

    // }, [screen])

    const onCloseScreen = () => {
        dispatch(setScreen(false))
    }

    return <section className="app-header ">
        {/* {isOpenScreen && <div className="screen" onClick={onCloseScreen}></div>} */}
        <main className="flex align-center">
            {/* <Link to="/"><img src={logoImg} alt="Wixy" className="logo" /></Link> */}
            <Link className="logo-link" to="/"><div className="logo">
                <img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653680277/logo-wixy_o9vwtu.png" alt="" />
            </div></Link>
            {/* <div className="flex"> */}
            <nav className="header-nav">
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/templates'>Templates</NavLink>
                <NavLink to='/editor'>Editor</NavLink>
                <NavLink to='/my-sites'>My Sites</NavLink>
            </nav>
            <nav className="login-signup-container">
                <Link className="login" to='/login'>Login</Link>
                <Link className="sign-up" to='/signup'>Sign Up</Link>
            </nav>
            {/* <div className="profile-button center-text" onClick={onProfileButton}>
                    {!user && <p></p>}
                    {user && <p>{getFirstLetterOfUser()}</p>}
                </div> */}
            {/* {user && isMenuOpen && <div className="profile-menu">
                    <h2>{user.fullname}</h2>
                    <ul className="clean-list">
                        <li><Link to={`/users/${user._id}`} onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
                        <li onClick={onLogout}>Logout</li>
                    </ul>
                </div>} */}
            {/* </div> */}
        </main>
    </section>
}