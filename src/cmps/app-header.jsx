import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setScreen } from "../store/actions/screen.action"
import { logout } from '../store/actions/user.action'
import { useHistory } from "react-router-dom"

export const AppHeader = ({ pageClass }) => {
    const { user } = useSelector(storeState => storeState.userModule)
    const dispatch = useDispatch()
    const history = useHistory()
    const { wap } = useSelector(storeState => storeState.wapModule)
    const defaultUrl = 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653772907/icons/login-image_nnfkgq.png'
    const [headerClass, setHeaderClass] = useState('')
    const [isOpen, setIsOpen] = useState('')
    const isLogin = user ? 'Logout' : 'Login'

    // const onPublish=()=>{
    //     // history.push(`/publish`)
    //     //    const win= window.open(`/publish`)
    //     /*🚀 ~~~~~~~~~~~~~~~~ FIX - CHANGE TO HIROKU  ~~~~~~~~~~~~~~~~~~~🚀 */
    //    const win= window.open(`http://localhost:3000/#/publish?id=${wap._id}`)
    //    win.focus()
    // }
    const onOpenModal = (ev) => {
        ev.stopPropagation()
        isOpen ? setIsOpen('') : setIsOpen('open')
    }
    const onSetLoginLogout = () => {
        if (isLogin === 'Logout') dispatch(logout())
        else history.push('/login')
    }
    return <section className={`app-header ${headerClass}`}>


        <main className="flex align-center">
            <Link className="logo-link" to="/"><div className="logo">
                <img src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1653740284/logo-wixy_fafsy0.png" alt="" />
            </div></Link>
            <nav className="header-nav">
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/templates'>Templates</NavLink>
                <NavLink to='/editor'>Editor</NavLink>

            </nav>
            {(pageClass !== 'editor-open') && <div onClick={(ev) => {
                onOpenModal(ev)
                setHeaderClass(isOpen)
            }} className="user-area">
                {!user && <Link onClick={(ev) => ev.stopPropagation()} className="login" to='/login'>Login</Link>}
                {user && <img className="user-img-header" src={user?.imgUrl || defaultUrl}></img>}
                <div className="hambrger">☰</div>
                {isOpen && <div className="user-modal-header">
                    {user && <div className="user-data">
                        <img className="user-img-header-inside" src={user?.imgUrl || defaultUrl}></img>
                        <div className="username">{`${user.lastName} ${user.firstName}`}</div>
                    </div>
                    }
                    <div className="nav-links-user-modal">
                        <NavLink className={'modal-links'} to='/' exact>Home</NavLink>
                        <NavLink className={'modal-links'} to='/templates'>Templates</NavLink>
                        <NavLink className={'modal-links'} to='/editor'>Editor</NavLink>
                        {user && <NavLink to='/my-sites'>My Sites</NavLink>}
                    </div>
                    {<button onClick={onSetLoginLogout} className="logout-btn">{isLogin}</button>}
                </div>}
            </div>}
            {(pageClass === 'editor-open') && <NavLink to={`/publish?id=${wap?._id}`} target={"_blank"} className="publish-btn logo-link">Publish</NavLink>}
            {/* {(pageClass === 'editor-open') && <NavLink to={`/publish`} target={"_blank"} className="publish-btn logo-link">Publish</NavLink>} */}
            {/* {(pageClass ==='editor-open')&&<button onClick={onPublish} className="publish-btn">Publish</button>} */}
        </main>
    </section>
}