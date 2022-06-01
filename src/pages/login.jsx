import * as React from 'react'

import { connect } from "react-redux"
import { signUp, login } from '../store/actions/user.action.js'
import {setMsg} from '../store/actions/msg.action'

import { SignUp } from '../cmps/signup'
import { SignIn } from '../cmps/signin'

import { FacebookAuthentication } from '../cmps/facebook-authentication'
import { GoogleAuthentication } from '../cmps/google-authentication'
import { gapi } from 'gapi-script'

const clientId = '777045938185-r0hkggifahev5ccik4eairjhrv7d0kua.apps.googleusercontent.com'
class _Login extends React.Component {
    
    state = {
        isLoginForm: true,
        isRememberMeMode: false,
        firstName: '',
        lastName: ''
    }

    componentDidMount() {
        const start = () => {
            gapi.client.init({
                clientId,
                scope: ''
            })
        }
        gapi.load('client:auth2', start)
    }
    // const accessToken = gapi.auth.getToken().access_token

    handleSubmit = async (isLogin, user) => {
        let loggedInUser
        try {
            if (isLogin) { loggedInUser = await this.props.login(user, this.state.isRememberMeMode) }
            else { loggedInUser = await this.props.signUp(user) }
        } catch {
            this.setState({ firstName: '', lastName: '' })
        }
        if (loggedInUser){

            this.props.setMsg({type:'success',txt:'Logged in'})
            this.props.history.push('/templates')
        }

        else this.setState({ firstName: '', lastName: '' })
    }

    handleSocialAuthentication = async (user) => {
        user.isSocial = true
        const loggedInUser = await this.props.login(user, this.state.isRememberMeMode)
        if (loggedInUser){
             this.props.setMsg({type:'success',txt:'Logged in'})
            this.props.history.push('/templates')

        }
    }

    onToggleLoginForm = (isLoginForm) => {
        this.setState({ isLoginForm })
    }

    handleCheckboxChange = () => {
        this.setState({ isRememberMeMode: !this.state.isRememberMeMode })
    }

    render() {
        const { isLoginForm, isRememberMeMode } = this.state
        return <section>
            {/*  SIGN-IN PAGE   */}
            {!isLoginForm && <SignUp handleSubmit={this.handleSubmit} onToggleLoginForm={this.onToggleLoginForm} />}

            {/*  LOGIN PAGE   */}
            {isLoginForm && <div className="login-page-container">
                <SignIn handleSubmit={this.handleSubmit} onToggleLoginForm={this.onToggleLoginForm} />
                <div className="networks-login">
                    <FacebookAuthentication handleSocialAuthentication={this.handleSocialAuthentication} />
                    <GoogleAuthentication handleSocialAuthentication={this.handleSocialAuthentication} />
                </div>
            </div>}
            {isLoginForm && <form className="remember-me" action="">
                <label>
                    <input type="checkbox" name="remember-me" checked={isRememberMeMode} id="remember-mode" onChange={this.handleCheckboxChange} />
                    Remember Me
                </label>
            </form>
            }
        </section>
    }
}

function mapStateToProps(storeState) {
    return {
        user: storeState.userModule.user,
    }
}
const mapDispatchToProps = {
    login,
    signUp,
    setMsg
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)