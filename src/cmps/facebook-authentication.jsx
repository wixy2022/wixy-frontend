import React from "react"
import FacebookLogin from 'react-facebook-login';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { authentication } from '../firebase-config.js'
import { async } from "@firebase/util";

export class FacebookAuthentication extends React.Component {
    state = {
        isLoggedIn: false,
        firstName: null,
        lastName: null,
        email: null,
        imgUrl: null
    }

    componentClicked = () => { }

    responseFacebook = async response => {
        const provider = new FacebookAuthProvider()
        const res = await signInWithPopup(authentication, provider)

        this.setState({
            isLoggedIn: true,
            facebookUserId: response.userID,
            firstName: response.first_name,
            lastName: response.last_name,
            email: response.email,
            imgUrl: response.picture.data.url
        }, () => this.props.handleSocialAuthentication(this.state))
    }

    render() {
        const { isLoggedIn } = this.state
        let fbContent

        if (isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.imgUrl} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            )
        } else {
            fbContent = (<FacebookLogin
                appId="350081457193721"
                fields="email,picture,first_name,last_name"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return <div className="facebook-login">{fbContent}</div>
    }
}