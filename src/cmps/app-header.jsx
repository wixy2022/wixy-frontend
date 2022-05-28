import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setScreen } from "../store/actions/screen.action"
// import { useState } from "react"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import logoImg from '../assets/img/logo.png'

export const AppHeader = () => {
    const { user } = useSelector(storeState => storeState.userModule)
    const defaultUrl = 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653772907/icons/login-image_nnfkgq.png'
    console.log(user)


    return <section className="app-header ">
        <main className="flex align-center">
            {/* <Link to="/"><img src={logoImg} alt="Wixy" className="logo" /></Link> */}
            <Link className="logo-link" to="/"><div className="logo">
                <img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653740284/logo-wixy_fafsy0.png" alt="" />
            </div></Link>
            {/* <div className="flex"> */}
            <nav className="header-nav">
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/templates'>Templates</NavLink>
                <NavLink to='/editor'>Editor</NavLink>
                <NavLink to='/my-sites'>My Sites</NavLink>
            </nav>
            <div className="user-area">
                {!user && <Link className="login" to='/login'>Login</Link>}
                {user && <img src={user?.imgUrl || defaultUrl}></img>}
            </div>
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