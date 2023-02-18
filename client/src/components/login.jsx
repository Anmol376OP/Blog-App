import React from 'react'
import { Box, TextField, Button, styled, Typography } from "@mui/material"
import { useState } from "react";

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
const Text = styled(Typography)({
    // fontSize: 14,
    color: 'grey',
    opacity: 0.5,
})

function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [accountState, setAccountState] = useState(true);
    return (
        <div>
            <div>
                <OuterBody>
                    <Component>
                        <Box>
                            <Image src={imageURL} alt="" />
                            {accountState ? <Wrapper>
                                <TextField id="standard-basic" label="Username" variant="standard" />
                                <TextField id="standard-basic" label="Password" variant="standard" />
                                <LoginButton variant="contained">Login</LoginButton>
                                <Text>OR</Text>
                                <Button onClick={() => setAccountState(!accountState)} >Create an Account</Button>
                            </Wrapper> : <Wrapper>
                                <TextField id="standard-basic" label="Username" variant="standard" />
                                <TextField id="standard-basic" label="Email" variant="standard" />
                                <TextField id="standard-basic" label="Password" variant="standard" />
                                <LoginButton variant="contained">Create Account</LoginButton>
                                <Text>OR</Text>
                                <Button onClick={() => setAccountState(!accountState)}>Sign In</Button>
                            </Wrapper>}
                        </Box>
                    </Component>
                </OuterBody>
            </div>
        </div >
    )
}
export default Login;