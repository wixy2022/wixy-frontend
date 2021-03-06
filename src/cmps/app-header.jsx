import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { logout } from '../store/actions/user.action'
import { useHistory } from "react-router-dom"
import { PreviewModal } from '../cmps/preview-modal.jsx'
import { wapService } from "../services/wap.service"

export const AppHeader = ({ pageClass, setPageClass }) => {
    const { user } = useSelector(storeState => storeState.userModule)
    const dispatch = useDispatch()
    const history = useHistory()
    const { wap } = useSelector(storeState => storeState.wapModule)
    const defaultUrl = 'https://res.cloudinary.com/drpqhjyvk/image/upload/v1653772907/icons/login-image_nnfkgq.png'
    const [headerClass, setHeaderClass] = useState('')
    const [isOpen, setIsOpen] = useState('')
    const isLogin = user ? 'Logout' : 'Login'
    const [isPreview, setIsPreview] = useState(false)

    const onOpenModal = (ev) => {
        ev.stopPropagation()
        isOpen ? setIsOpen('') : setIsOpen('open')
    }

    const onSetLoginLogout = () => {
        if (isLogin === 'Logout') dispatch(logout())
        else history.push('/login')
    }
    
    const saveAndPublish = () => {
        wapService.save(wap)
        return `publish/?id=${wap?._id}`
    }

    return <section className={`app-header ${headerClass}`}>

        <main className="flex align-center main-layout">
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
                <div className="hambrger">???</div>
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
            {(pageClass === 'editor-open') && <div className="show-site-links">

                <button onClick={() => setIsPreview(true)} className="preview-btn logo-link">Preview</button>
                <NavLink to={saveAndPublish} target={"_blank"} className="publish-btn logo-link">Publish</NavLink>
            </div>}
        </main>
        {isPreview && <>
            <PreviewModal setPageClass={setPageClass} setIsPreview={setIsPreview} />
            <div onClick={(ev) => { ev.stopPropagation(); setIsPreview(false) }} className="black-screen"></div>
        </>
        }
    </section>
}