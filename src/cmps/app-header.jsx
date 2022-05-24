import { NavLink, Link } from "react-router-dom"
// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { logout } from "../store/actions/user.action";
// import logoImg from '../assets/img/logo.png'

export const AppHeader = () => {

    // const { user } = useSelector(storeState => storeState.userModule)
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const history = useHistory()
    // const dispatch = useDispatch()

    // const onProfileButton = () => {
    //     if (user) {
    //         setIsMenuOpen(!isMenuOpen)
    //     } else {
    //         setIsMenuOpen(false)
    //         history.push('/login')
    //     }
    // }

    // const onLogout = () => {
    //     dispatch(logout())
    // }

    // const getFirstLetterOfUser = () => {
    //     return user.username.charAt(0).toUpperCase()
    // }

    return <section className="app-header ">
        <main className="flex align-center">
            {/* <Link to="/"><img src={logoImg} alt="Wixy" className="logo" /></Link> */}
            <Link className="logo-link" to="/"><div className="logo">WiXY</div></Link>
            {/* <div className="flex"> */}
            <nav className="header-nav">
                <NavLink to='/' exact>Home <span>˅</span> </NavLink>
                <NavLink to='/about'>About <span>˅</span></NavLink>
                <NavLink to='/templates'>Templates <span>˅</span></NavLink>
                <NavLink to='/editor'>Editor <span>˅</span></NavLink>
                <NavLink to='/my-sites'>My Sites <span>˅</span></NavLink>
            </nav>
            <Link className="login" to='/login'>Login</Link>
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