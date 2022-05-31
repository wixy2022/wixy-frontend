import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export class SignIn extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    onSignIn = (ev) => {
        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        const user = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }
        this.props.handleSubmit(true, user)
    }

    render() {
        const theme = createTheme()
        theme.palette.primary.main = '#424242'
        theme.palette.primary.contrastText = '#DBDBDB'
        theme.palette.primary.dark = '#585858'

        return <ThemeProvider theme={theme}>
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
                    <Box component="form" onSubmit={this.onSignIn} noValidate sx={{ mt: 1 }}>
                        <TextField
                            value={this.state.firstName}
                            onChange={(e) => { this.setState({ firstName: e.target.value }) }}
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
                            value={this.state.lastName}
                            onChange={(e) => { this.setState({ lastName: e.target.value }) }}
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
                                <Link variant="body2" onClick={() => this.props.onToggleLoginForm(false)}>
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    }
}