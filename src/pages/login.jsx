import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { connect } from "react-redux"
import { signUp, login } from '../store/actions/user.action.js'

import { FacebookAuthentication } from '../cmps/facebook-authentication'


class _Login extends React.Component {

    state = {
        isLoginForm: true
    }

    handleSubmit = async (ev, isLogin) => {
        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        const user = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }

        let loggedInUser
        if (isLogin) { loggedInUser = await this.props.login(user) }
        else { loggedInUser = await this.props.signUp(user) }
        if (loggedInUser) this.props.history.push('/templates')
    }

    handleFacebookAuthentication = async (facebookUser) => {
        console.log(facebookUser, 'facebookUser')
        facebookUser.isSocial = true
        console.log(facebookUser, 'facebookUser')
        const loggedInUser = await this.props.login(facebookUser)
        if (loggedInUser) this.props.history.push('/templates')
    }

    onToggleLoginForm = (isLoginForm) => {
        this.setState({ isLoginForm })
    }

    render() {
        const { isLoginForm } = this.state
        const theme = createTheme()
        theme.palette.primary.main = '#424242'
        theme.palette.primary.contrastText = '#DBDBDB'
        theme.palette.primary.dark = '#585858'
        // console.log('theme', theme)

        return <section>
            {/* ~~~~~~~~~~ SIGN-IN PAGE  ~~~~~~~~~~ */}
            {!isLoginForm && <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar style={{ margin: 1, backgroundColor: '#424242' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={(ev) => this.handleSubmit(ev, false)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link variant="body2" onClick={() => this.onToggleLoginForm(true)}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >}

            {/* ~~~~~~~~~~ LOGIN PAGE  ~~~~~~~~~~ */}
            {isLoginForm && <div className="login-page-container">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#424242' }}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={(ev) => this.handleSubmit(ev, true)} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link variant="body2" onClick={() => this.onToggleLoginForm(false)}>
                                            Don't have an account? Sign Up
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
                {/* ~~~~~~~~~~ FACEBOOK  ~~~~~~~~~~ */}
                <div className="networks-login">
                    {/* <p>Authenticate with Facebook</p> */}
                    <FacebookAuthentication handleFacebookAuthentication={this.handleFacebookAuthentication} />
                </div>
            </div>}
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
    signUp
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login)