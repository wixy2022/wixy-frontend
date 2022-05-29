import React from "react"
import { GoogleLogin } from 'react-google-login'

const clientId = '777045938185-r0hkggifahev5ccik4eairjhrv7d0kua.apps.googleusercontent.com'

export class GoogleAuthentication extends React.Component {

    state = {
        firstName: null,
        lastName: null,
        email: null,
        imgUrl: null
    }

    onSuccess = (res) => {
        console.log('google login success. loggedin user:', res.profileObj)

        this.setState({
            googleUserId: res.profileObj.googleId,
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            imgUrl: res.profileObj.imageUrl
        }, () => {
            console.log(this.state, 'this.state')
            this.props.handleSocialAuthentication(this.state)
        })
    }

    onFailure = (res) => {
        console.log('google login failed. err:', res.profileObj)
    }

    // const accessToken = gapi.auth.getToken().access_token

    render() {
        return <div className="google-login">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login With Gmail'
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                coockiePolicy={'signal_host_origin'}
                isSignedIn={true}
            />
        </div>
    }

}