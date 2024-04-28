import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container , Button, Stack} from '@mui/material';
import { Margin, Padding } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";


export default function AddStudent() {
    const [indexNo, setIndexNo] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [nic, setNic] = React.useState('');
    const [contactNo, setContactNo] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    const navigate = useNavigate();

    const saveData=(e)=>{
        e.preventDefault();
        const student = {indexNo, name, address, nic, contactNo};
        console.log(student);
        fetch("http://localhost:8080/Student/save",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            window.alert("Student Registered to the Database");
            resetData();
            setLoggedIn(true);
            navigate("/login"); 
        });
    };
      

    const resetData=(e)=>{
        setIndexNo('');
        setName('');
        setAddress('');
        setNic('');
        setContactNo('');
        setEmail('');
        setPassword('');
    }

    const containerStyle = {padding: '70px 20px', width: 700, margin: '10px auto',};

    return (
        <Container style={containerStyle}>
            <div>
                <h2>Student Registration</h2>
            </div>
            <Box className="box-container"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '60ch' },
                }}
                noValidate
                autoComplete="off" >
                
                <TextField id="outlined-basic" label="Index No" variant="outlined" fullWidth
                    value={indexNo}
                    onChange={(e) => setIndexNo(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student NIC" variant="outlined" fullWidth
                    value={nic}
                    onChange={(e) => setNic(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Contact No" variant="outlined" fullWidth
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Email" variant="outlined" fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

            </Box>
            <Box className="box-container2" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={saveData}>Register</Button>
                    <Button variant="outlined" onClick={resetData}>Reset</Button>
                </Stack>
            </Box>
            
        </Container>
    );
}
