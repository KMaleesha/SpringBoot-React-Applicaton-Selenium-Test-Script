import React, { useState } from 'react';
import { Container, Box, TextField, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/Student/login', {
                email,
                password
            });
            window.alert('Login successful:', response.data);
            setLoggedIn(true);
            navigate("/viewstudents"); 
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    const containerStyle = { padding: '70px 20px', width: 700, margin: '10px auto' };

    return (
        <Container style={containerStyle}>
            <div>
                <h2>Login</h2>
            </div>
            <Box
                className="box-container"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Stack spacing={2} direction="row" sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" type="submit">Login</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default Login;
