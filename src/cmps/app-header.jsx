import { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../store/actions/user.action";
import logoImg from '../assets/img/logo.png'

export const AppHeader = () => {

    const { user } = useSelector(storeState => storeState.userModule)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const onProfileButton = () => {
        if (user) {
            setIsMenuOpen(!isMenuOpen)
        } else {
            setIsMenuOpen(false)
            history.push('/login')
        }
    }

    const onLogout = () => {
        dispatch(logout())
    }

    const getFirstLetterOfUser = () => {
        return user.username.charAt(0).toUpperCase()
    }

    return <section className="app-header full-layout">
        <main className="flex space-between align-center">
            <Link to="/"><img src={logoImg} alt="Wixy" className="logo" /></Link>
            <div className="flex">
                <nav className="flex">
                    <NavLink to='/' exact>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
                <div className="profile-button center-text" onClick={onProfileButton}>
                    {!user && <p></p>}
                    {user && <p>{getFirstLetterOfUser()}</p>}
                </div>
                {user && isMenuOpen && <div className="profile-menu">
                    <h2>{user.fullname}</h2>
                    <ul className="clean-list">
                        <li><Link to={`/users/${user._id}`} onClick={() => setIsMenuOpen(false)}>Profile</Link></li>
                        <li onClick={onLogout}>Logout</li>
                    </ul>
                </div>}
            </div>
        </main>
    </section>
}