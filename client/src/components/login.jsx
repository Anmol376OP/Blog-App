import React from 'react'
import { Box, TextField, Button, styled, Typography } from "@mui/material"
import { useState } from "react";
import { API } from '../services/api';

const OuterBody = styled(Box)({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const Component = styled(Box)({
    width: 400,
    margin: 'auto',
    boxShadow: '5px 2px 5px 2px rgb(0 0 0/ 0.6)'
});
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    paddingTop: 50,
});
const Wrapper = styled(Box)({
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    textAlign: 'center',
});
const LoginButton = styled(Button)({
    background: '#e36405',
    '&:hover': {
        background: '#878786',
    }
})
const Error = styled(Typography)({
    fontSize: 10,
    color: 'red',
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
})
const Text = styled(Typography)({
    fontSize: 14,
    color: 'grey',
    opacity: 0.5,
})
const loginInitialValues = {
    username: '',
    password: '',
}

const signupInitialValues = {
    username: ' ',
    email: ' ',
    password: ' ',
}

function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [accountState, setAccountState] = useState(true);
    const [signUp, setSignUp] = useState(signupInitialValues);
    const [error, setError] = useState(' ');
    const [login, setLogin] = useState(loginInitialValues);

    const onInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }

    const signUpUser = async () => {
        let response = {}
        try {
            response = await API.userSignup(signUp);
        }
        catch (e) {
            console.log(e)
        }
        if (response.isSuccess) {
            setError('');
            setSignUp(signupInitialValues);
            setAccountState(true);
        }
        else {
            setError('Something went wrong! Please try again later')
        }
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value, })
    }
    const loginUser = async () => {
        let response = {}
        try {
            response = await API.userLogin(login);
        }
        catch (e) {
            console.log(e)
        }
        if (response.isSuccess) {
            setError('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        }
        else {
            setError('Something went wrong! Please try again later')
        }
    }
    return (
        <div>
            <div>
                <OuterBody>
                    <Component>
                        <Box>
                            <Image src={imageURL} alt="" />
                            {accountState ? <Wrapper>
                                <TextField value={login.username} id="standard-basic" label="Username" variant="standard" onChange={(e) => { onValueChange(e) }} name="username" />
                                <TextField value={login.password} id="standard-basic" label="Password" variant="standard" onChange={(e) => { onValueChange(e) }} name="password" />
                                {error && <Error>{error}</Error>}
                                <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                                <Text>OR</Text>
                                <Button onClick={() => { setAccountState(!accountState); setError('') }} >Create an Account</Button>
                            </Wrapper> : <Wrapper>
                                <TextField value={signUp.username} id="standard-basic" label="Username" variant="standard" onChange={(e) => onInputChange(e)} name="username" />
                                <TextField value={signUp.email} id="standard-basic" label="Email" variant="standard" onChange={(e) => onInputChange(e)} name="email" />
                                <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => onInputChange(e)} name="password" />
                                {error && <Error>{error}</Error>}
                                <LoginButton variant="contained" onClick={() => signUpUser()}>Sign Up</LoginButton>
                                <Text>OR</Text>
                                <Button onClick={() => { setAccountState(!accountState); setError('') }}>Sign In</Button>
                            </Wrapper>}
                        </Box>
                    </Component>
                </OuterBody>
            </div>
        </div >
    )
}
export default Login;